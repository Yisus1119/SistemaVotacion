import { Request, Response } from "express";
import { getCandidateService } from "./service";

export function getCandidateController(req: Request, res: Response){
    const {candidatePosition} = req.params;

    if(candidatePosition.length < 1){
        return res.send("Error");
    }

    const candidate = getCandidateService(candidatePosition);

    if(candidate == null){
        res.send("Not exist");
    }

    res.json(candidate);
}