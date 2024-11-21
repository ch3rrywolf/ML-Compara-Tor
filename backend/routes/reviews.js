import express from 'express';
import { createReview } from '../controllers/reviewsController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/:voitureId', verifyUser, createReview)

export default router;