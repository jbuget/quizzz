import express from "express";
import * as quizzesController from "../controllers/quizzes";

const router = express.Router();

/**
 * Playing
 */
router.get("/api/quizzes", quizzesController.findPublicQuizzes);
router.post("/api/games");
router.get("/api/games/:game_uuid");
router.post("/api/games/:game_uuid/answer");

/**
 * Profile
 */
router.get("/api/user/profile");
router.get("/api/users/:username/profile");
router.get("/api/user/games");

export default router;
