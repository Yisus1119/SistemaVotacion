import { Request, Response } from "express-serve-static-core";
import { getElectionService } from "./service";

export function getElectionController(req: Request, res: Response) {
    const { electionName } = req.params;

    if (electionName.length < 1) {
        return res.send("Error");
    }

    const election = getElectionService(electionName);

    if (election == null) {
        res.send("Not exist");
    }
    
    res.send(election);
}
