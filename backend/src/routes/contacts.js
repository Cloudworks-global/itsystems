import { Router } from "express";
import { store } from "../controllers/contacts.controller.js";

const router = Router();

router.post("/contacts", store);

export default router;
