import { CVSSNumericValues, GaugeSegment } from "../types/types";

export const cvssNumericValues: CVSSNumericValues = {
  AV: {
    N: 0.85,
    A: 0.62,
    L: 0.55,
    P: 0.2,
  },
  AC: {
    L: 0.77,
    H: 0.44,
  },
  PR: {
    N: 0.85,
    L: {
      U: 0.62, // Valor cuando el Scope es Unchanged
      C: 0.68, // Valor cuando el Scope es Changed
    },
    H: {
      U: 0.27, // Valor cuando el Scope es Unchanged
      C: 0.5, // Valor cuando el Scope es Changed
    },
  },
  UI: {
    N: 0.85,
    R: 0.62,
  },
  S: {
    U: false,
    C: true,
  },
  C: {
    H: 0.56,
    L: 0.22,
    N: 0,
  },
  I: {
    H: 0.56,
    L: 0.22,
    N: 0,
  },
  A: {
    H: 0.56,
    L: 0.22,
    N: 0,
  },
};

export const severityConfig: GaugeSegment[] = [
  { limit: 0, color: "#FFFFFF", label: "None" }, // Blanco para "None"
  { limit: 3.9, color: "#7AC74F", label: "Low" }, // Verde para "Low"
  { limit: 6.9, color: "#F2BB05", label: "Medium" }, // Amarillo para "Medium"
  { limit: 8.9, color: "#DF2935", label: "High" }, // Naranja para "High"
  { limit: 10, color: "#000000", label: "Critical" }, // Rojo para "Critical"
];

export const exploitabilityConfig: GaugeSegment[] = [
  { limit: 0.3, color: "#7AC74F", label: "Minimal" },
  { limit: 1, color: "#F2BB05", label: "Low" },
  { limit: 3, color: "#DF2935", label: "Moderate" },
  { limit: 3.9, color: "#000000", label: "High" },
];

export const impactConfig: GaugeSegment[] = [
  { limit: 1, color: "#7AC74F", label: "Minor" },
  { limit: 3.3, color: "#F2BB05", label: "Moderate" },
  { limit: 5.1, color: "#DF2935", label: "Critical" },
  { limit: 6.1, color: "#000000", label: "Catastrophic" },
];
