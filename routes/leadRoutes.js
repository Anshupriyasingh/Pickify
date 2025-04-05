import express from "express";
import { createLead } from "../controllers/leadController.js";

const router = express.Router();

// POST route to submit lead
router.post("/", createLead);

export default router;
