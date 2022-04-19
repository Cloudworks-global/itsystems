import multer from "multer";
import { Router } from "express";
import { fileURLToPath } from "url";
import { extname, join, dirname } from "path";
import { verifyToken } from "../libs/verifyToken.js";
import { index, store } from "../controllers/clients.controller.js";

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get("/clients", index);

const storageClients = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(__dirname, "../public/clients/"));
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + extname(file.originalname));
  },
});

const uploadClients = multer({ storage: storageClients });

router.post(
  "/clients",
  verifyToken,
  uploadClients.array("clients-files"),
  store
);

export default router;
