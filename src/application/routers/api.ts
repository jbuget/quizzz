import express from "express";
import * as apiController from "../controllers/api";

const router = express.Router();

router.get("/api", apiController.getApi);

export default router;
