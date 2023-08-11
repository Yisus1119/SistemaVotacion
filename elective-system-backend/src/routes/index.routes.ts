import { Router } from "express";
import userRoutes from "../components/users/routes";
import authRoutes from "../services/auth/auth.routes";

const router = Router();

router.use("/api", userRoutes);
router.use("/api", authRoutes);

export { router };
