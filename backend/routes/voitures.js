import express from "express";
import { createVoiture } from "../controllers/voitureController.js";

const router = express.Router();

router.post("/", createVoiture);

export default router;