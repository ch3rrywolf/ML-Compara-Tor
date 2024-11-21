import express from "express";
import { createVoiture, updateVoiture, deleteVoiture, getOneVoiture, getAllVoiture, getVoitureBySearch, getFeaturedVoiture, getVoitureCount } from "../controllers/voitureController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createVoiture);
router.put("/:id", verifyAdmin, updateVoiture);
router.delete("/:id", verifyAdmin, deleteVoiture);
router.get("/:id", getOneVoiture);
router.get("/", getAllVoiture);
router.get("/search/getVoitureBySearch", getVoitureBySearch);
router.get("/search/getFeaturedVoitures", getFeaturedVoiture);
router.get("/search/getVoitureCount", getVoitureCount);

export default router;