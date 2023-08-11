import { Router, Request, Response } from "express";
import { getElectionController } from "./controller";
const router = Router();

router.get("/election/:electionName", getElectionController);

export default router;