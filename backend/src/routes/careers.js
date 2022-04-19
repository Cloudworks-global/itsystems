import multer from "multer";
import { Router } from "express";
import { fileURLToPath } from "url";
import { extname, join, dirname } from "path";
import { store } from "../controllers/careers.controller.js";

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

const storageCV = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(__dirname, "../public/files/"));
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + extname(file.originalname));
  },
});

const uploadCV = multer({ storage: storageCV });

router.post("/careers", uploadCV.array("cv"), store);

export default router;
