import express from "express";
import { list, show, create } from "../controllers/ContactController";

const router = express.Router();

router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);

export default router;
