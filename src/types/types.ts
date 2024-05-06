import { ElementType } from "react";

export interface ToggleButtonOption {
  // value: number | boolean;
  icon: ElementType;
  label: string;
  key: string;
  description: string;
}

export interface ToggleButtonsProps {
  value?: string | null;
  options: ToggleButtonOption[];
  onChange: (key: string) => void;
}

export interface ToggleButtonConfig {
  title: string;
  key: string;
  description: string;
  options: ToggleButtonOption[];
}

export interface CVSSValues {
  AV: number | null; // Attack Vector
  AC: number | null; // Attack Complexity
  PR: number | null; // Privileges Required
  UI: number | null; // User Interaction
  S: boolean | null; // Scope (true if changed, false if unchanged, null if not set)
  C: number | null; // Confidentiality
  I: number | null; // Integrity
  A: number | null; // Availability
}

export interface VectorValues {
  AV: string | null; // Attack Vector
  AC: string | null; // Attack Complexity
  PR: string | null; // Privileges Required
  UI: string | null; // User Interaction
  S: string | null; // Scope (true if changed, false if unchanged, null if not set)
  C: string | null; // Confidentiality
  I: string | null; // Integrity
  A: string | null; // Availability
}

export interface CVSSNumericValues {
  AV: {
    N: number;
    A: number;
    L: number;
    P: number;
  };
  AC: {
    L: number;
    H: number;
  };
  PR: {
    N: number;
    L: {
      U: number;
      C: number;
    };
    H: {
      U: number;
      C: number;
    };
  };
  UI: {
    N: number;
    R: number;
  };
  S: {
    U: boolean;
    C: boolean;
  };
  C: {
    H: number;
    L: number;
    N: number;
  };
  I: {
    H: number;
    L: number;
    N: number;
  };
  A: {
    H: number;
    L: number;
    N: number;
  };
}

// Definición de tipos para los segmentos de severidad
export interface SeveritySegment {
  limit: number; // Opcional porque el último segmento no tiene límite
  color: string;
  label: string;
}

