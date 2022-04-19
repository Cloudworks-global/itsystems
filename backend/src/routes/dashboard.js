import { Router } from "express";

const router = Router();

router.get("/dashboard", (req, res) => {
  res.sendFile("dashboard.html", { root: "./src/public" });
});

router.get("/fail", (req, res) => {
  res.sendFile("fail.html", { root: "./src/public" });
});

router.get("/success", (req, res) => {
  res.sendFile("success.html", { root: "./src/public" });
});

export default router;
