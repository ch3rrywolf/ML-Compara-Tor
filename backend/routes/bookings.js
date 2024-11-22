import express from 'express';
import { createBooking, getAllBooking, getOneBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getOneBooking)
router.get('/', verifyUser, getAllBooking)

export default router;