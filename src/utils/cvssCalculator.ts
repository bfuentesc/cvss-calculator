import { cvssNumericValues } from "../config/CVSSNumericValues";
import { CVSSValues, VectorValues } from "../types/types";

export function calculateCVSS(values: CVSSValues) {
  const minimum = (a: number, b: number) => Math.min(a, b);
  const roundup = (num: number) => Math.ceil(num * 10) / 10;

  const calculateISS = (C: number, I: number, A: number) =>
    1 - (1 - C) * (1 - I) * (1 - A);

  const calculateImpact = (ISS: number, scopeChanged: boolean) => {
    if (!scopeChanged) {
      return 6.42 * ISS;
    } else {
      return 7.52 * (ISS - 0.029) - 3.25 * (ISS - 0.02) ** 15;
    }
  };

  const calculateExploitability = (
    AV: number,
    AC: number,
    PR: number,
    UI: number
  ) => 8.22 * AV * AC * PR * UI;

  const { C, I, A, S, AV, AC, PR, UI } = values;
  const ISS = calculateISS(C!, I!, A!);
  const Impact = calculateImpact(ISS, S!);
  const Exploitability = calculateExploitability(AV!, AC!, PR!, UI!);
  let BaseScore;

  if (Impact <= 0) {
    BaseScore = 0;
  } else {
    if (!S) {
      // If Scope is Unchanged
      BaseScore = roundup(minimum(Impact + Exploitability, 10));
    } else {
      // If Scope is Changed
      BaseScore = roundup(minimum(1.08 * (Impact + Exploitability), 10));
    }
  }

  return BaseScore;
}

type CVSSMetricKey = "AV" | "AC" | "PR" | "UI" | "S" | "C" | "I" | "A";
const metricMapping: { [key in CVSSMetricKey]: string } = {
  AV: "AV",
  AC: "AC",
  PR: "PR",
  UI: "UI",
  S: "S",
  C: "C",
  I: "I",
  A: "A",
};

export function generateCVSSVector(values: VectorValues): string {
  const isComplete = Object.entries(values).every(
    ([key, value]) => value !== null
  );
  if (!isComplete) {
    throw new Error(
      "All CVSS vector values must be set before generating the vector."
    );
  }

  const parts = Object.entries(values).map(([key, value]) => {
    if (value === null) return ""; // This should never happen due to the check above, but keeps TypeScript happy
    const safeKey = key as CVSSMetricKey;
    return `${metricMapping[safeKey]}:${value}`;
  });

  return `CVSS:3.1/${parts.join("/")}`;
}

export function getNumericCVSSValue(initialVectorValues: VectorValues): {
  [key: string]: number | boolean | null;
} {
  const result: { [key: string]: number | boolean | null } = {};

  for (const metric in initialVectorValues) {
    const key = initialVectorValues[metric as keyof VectorValues];
    if (key === null) {
      result[metric] = null;
      continue;
    }

    if (metric === "S") {
      result[metric] = cvssNumericValues.S[key as "U" | "C"];
    } else if (metric === "PR") {
      const scope = initialVectorValues.S;
      if (scope === "U" || scope === "C") {
        // Asegurarse de que la clave para PR es 'N', 'L', o 'H', y que el scope es 'U' o 'C'
        if (key === "N") {
          result[metric] = cvssNumericValues.PR.N;
        } else if (key === "L" || key === "H") {
          const prValue = cvssNumericValues.PR[key as 'L' | 'H'];
          result[metric] = prValue[scope as 'U' | 'C'];
        } else {
          result[metric] = null; // En caso de que key no sea 'N', 'L', ni 'H'
        }
      } else {
        result[metric] = null; // Manejar caso en el que Scope no es 'U' ni 'C'
      }
    } else {
      // Acceder a los valores para AV, AC, UI, C, I, A
      result[metric] = (cvssNumericValues as any)[metric][key as string] as number;
    }
  }

  return result;
}

// Función para analizar el vector CVSS y convertirlo en un objeto de valores
export function parseCVSSVector(vector: string): VectorValues {
  const values: Partial<VectorValues> = {
    AV: null,
    AC: null,
    PR: null,
    UI: null,
    S: null,
    C: null,
    I: null,
    A: null
  };

  // Extraer la parte del vector después de "CVSS:3.1/"
  const regex = /CVSS:3\.1\/(.*)/;
  const matches = regex.exec(vector);
  if (matches && matches[1]) {
    const components = matches[1].split('/');
    components.forEach(component => {
      const [key, value] = component.split(':');
      if (key && value && key in values) {
        values[key as CVSSMetricKey] = value;
      }
    });
  }

  // Asegurarse de que todos los campos están definidos, de lo contrario, establecerlos a null
  const keys: CVSSMetricKey[] = ['AV', 'AC', 'PR', 'UI', 'S', 'C', 'I', 'A'];
  keys.forEach(key => {
    if (!values[key]) {
      values[key] = null;
    }
  });

  return values as VectorValues;
}

