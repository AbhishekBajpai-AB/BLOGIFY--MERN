import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

/* ======================
   MIDDLEWARE
   ====================== */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev (CRA)
      "http://localhost:5173", // local dev (Vite)
      "https://carefree-truth-production.up.railway.app" // Railway frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

/* ======================
   ROUTES
   ====================== */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

/* ======================
   DATABASE + SERVER
   ====================== */
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
