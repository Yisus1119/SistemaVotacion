import { Router } from "express";
import userRoutes from "../components/users/routes";
import authRoutes from "../services/auth/auth.routes";
import electionRoutes from "../components/elections/routes";
import candidateRoutes from "../components/candidates/routes"

const router = Router();

router.use("/api", userRoutes);
router.use("/api", authRoutes);
router.use("/api", electionRoutes);
router.use("/api", candidateRoutes);

export { router };
