import express from "express";
import { getUsers } from "../controllers/message-controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUsers);

router.post("/send/:id", authMiddleware, getUsers);

export default router;
