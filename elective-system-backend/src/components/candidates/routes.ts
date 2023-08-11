import { Router, Request, Response } from "express";
import { getCandidateController } from "./controller";
const router = Router();

router.get("/candidate/:candidatePosition", getCandidateController);

export default router;