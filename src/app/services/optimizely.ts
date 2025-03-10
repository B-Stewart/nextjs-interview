import { optimizelyExperiments } from "./mock";

export const getOptimizelyExperimentValue = (experimentKey: string) => {
  return optimizelyExperiments[experimentKey];
};
