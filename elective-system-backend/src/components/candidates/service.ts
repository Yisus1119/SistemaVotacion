import { getCandidateModel } from "./model";

export const getCandidateService = (candidatePosition: string) => {
    return getCandidateModel(candidatePosition);
};