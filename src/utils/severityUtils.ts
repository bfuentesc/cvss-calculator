import { severityConfig } from "../config/CVSSValues";
import { SeveritySegment } from "../types/types";


export function determineSeverity(baseScore: number): SeveritySegment {
  if (baseScore === 0) {
    return severityConfig[0];
  }
  for (const segment of severityConfig) {
    if (segment.limit === undefined || baseScore <= segment.limit) {
      return segment;
    }
  }
  throw new Error("Invalid base score");
}
