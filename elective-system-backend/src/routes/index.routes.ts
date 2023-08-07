import { Router } from "express";
import userRoutes from "../components/users/routes";

const router = Router();

router.use("/api", userRoutes);

export { router };
