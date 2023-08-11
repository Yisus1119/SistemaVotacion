import { getElectionModel } from "./model";

export const getElectionService = (electionName: string) => {
    return getElectionModel(electionName);
}