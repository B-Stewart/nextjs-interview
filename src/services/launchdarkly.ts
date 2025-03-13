import { ldExperiments } from "./mock";

export const getLaunchDarklyExperimentValue = (
  experimentKey: string
): boolean => {
  return ldExperiments[experimentKey] || false;
};
