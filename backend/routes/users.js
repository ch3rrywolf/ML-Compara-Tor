import express from "express";
import { deleteUser, getAllUser, getOneUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

router.put("/:id",  updateUser);
router.delete("/:id",  deleteUser);
router.get("/:id",  getOneUser);
router.get("/",  getAllUser);

export default router;