import multer from "multer";
import { Router } from "express";
import { fileURLToPath } from "url";
import { extname, join, dirname } from "path";
import { verifyToken } from "../libs/verifyToken.js";
import { index, store } from "../controllers/technologies.controller.js";

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get("/technologies", index);

const storageTechnology = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(__dirname, "../public/technology/"));
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + extname(file.originalname));
  },
});

const uploadTechnology = multer({ storage: storageTechnology });

router.post(
  "/technologies",
  verifyToken,
  uploadTechnology.array("technologies-files"),
  store
);

export default router;
