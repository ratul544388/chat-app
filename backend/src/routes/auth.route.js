import express from "express";
import {
  getAuthUser,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.patch("/update-profile", authMiddleware, updateProfile);

router.get("/user", authMiddleware, getAuthUser);

export default router;
