import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import FileController from "../controllers/file.controller";

const router = Router()

router.post('/file', authMiddleware, FileController.createDir)

export default router;