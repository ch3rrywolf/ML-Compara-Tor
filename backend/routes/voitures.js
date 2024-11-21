import express from "express";
import { createVoiture, updateVoiture, deleteVoiture, getOneVoiture, getAllVoiture, getVoitureBySearch, getFeaturedVoiture, getVoitureCount } from "../controllers/voitureController.js";

const router = express.Router();

router.post("/", createVoiture);
router.put("/:id", updateVoiture);
router.delete("/:id", deleteVoiture);
router.get("/:id", getOneVoiture);
router.get("/", getAllVoiture);
router.get("/search/getVoitureBySearch", getVoitureBySearch);
router.get("/search/getFeaturedVoitures", getFeaturedVoiture);
router.get("/search/getVoitureCount", getVoitureCount);

export default router;