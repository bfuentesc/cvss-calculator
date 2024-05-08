import {
  exploitabilityConfig,
  impactConfig,
  severityConfig,
} from "../config/CVSSValues";
import { GaugeSegment } from "../types/types";

export function determineSeverity(
  baseScore: number,
  darkMode: boolean
): GaugeSegment {
  if (baseScore === 0) {
    return severityConfig[0];
  }
  for (const segment of severityConfig) {
    if (segment.limit === undefined || baseScore <= segment.limit) {
      if (darkMode && segment.color === "#000000") {
        return { ...segment, color: "#FFF" };
      }

      return segment;
    }
  }
  throw new Error("Invalid base score");
}

export function determineExploitability(score: number,darkMode: boolean): GaugeSegment {
  if (score === 0) {
    return exploitabilityConfig[0];
  }
  for (const segment of exploitabilityConfig) {
    if (segment.limit === undefined || score <= segment.limit) {
      if (darkMode && segment.color === "#000000") {
        return { ...segment, color: "#FFF" };
      }

      return segment;
    }
  }
  throw new Error("Invalid exploitability score");
}

export function determineImpact(score: number,darkMode: boolean): GaugeSegment {
  if (score === 0) {
    return impactConfig[0];
  }
  for (const segment of impactConfig) {
    if (segment.limit === undefined || score <= segment.limit) {
      if (darkMode && segment.color === "#000000") {
        return { ...segment, color: "#FFF" };
      }
      return segment;
    }
  }
  throw new Error("Invalid impact score");
}
