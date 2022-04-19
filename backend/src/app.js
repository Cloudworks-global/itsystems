import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import clientsRoutes from "./routes/clients.js";
import technologiesRoutes from "./routes/technologies.js";
import careersRoutes from "./routes/careers.js";
import contactsRoutes from "./routes/contacts.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(express.static(__dirname + "/public"));

app.use(authRoutes);
app.use(dashboardRoutes);
app.use(clientsRoutes);
app.use(technologiesRoutes);
app.use(careersRoutes);
app.use(contactsRoutes);

export { app };
