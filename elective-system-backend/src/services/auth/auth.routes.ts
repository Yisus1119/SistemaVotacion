import { Router } from "express";
import { postAuthenticateController } from "./controller";

const router = Router();

router.post("/authenticate", postAuthenticateController);

export default router;
