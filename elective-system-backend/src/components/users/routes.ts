/*
    - get_user: return user
*/
import { Router, Request, Response } from "express";
import { getUserController } from "./controller";
const router = Router();

router.get("/user/:name", getUserController);

export default router;
