import express from "express";

const router = express.Router();

/**
 * Quiz listing
 */
router.get("/api/user/quizzes");
router.get("/api/users/:username/quizzes");

/**
 * Quiz management
 */
router.post("/api/quizzes");
router.get("/api/quizzes/:quiz_uuid");
router.patch("/api/quizzes/:quiz_uuid");
router.delete("/api/quizzes/:quiz_uuid");
router.get("/api/quizzes/:quiz_uuid/questions");
router.post("/api/quizzes/:quiz_uuid/question");
router.patch("/api/quizzes/:quiz_uuid/question/:question_uuid");
router.delete("/api/quizzes/:quiz_uuid/question/:question_uuid");
router.put("/api/quizzes/:quiz_uuid/publication");
router.delete("/api/quizzes/:quiz_uuid/publication");

export default router;

