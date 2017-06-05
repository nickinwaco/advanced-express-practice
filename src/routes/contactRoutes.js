import express from "express";
// import { list, show, create } from "../controllers/ContactController";
import ContactController from "../controllers/ContactController";

const router = express.Router();

const BASE_ROUTE = "/contacts";

router.get(BASE_ROUTE, ContactController.list);
router.get(BASE_ROUTE, ContactController.find);
router.get(BASE_ROUTE + "/:id", ContactController.show);
router.post(BASE_ROUTE, ContactController.create);

export default router;
