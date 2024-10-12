import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import path from "path";

import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
// init express
const app = express();
const PORT = process.env.PORT || 5000;

//! __dirname does if we are on production use static build folder which showed at line 24
const __dirname = path.resolve();

//! Allow us to accept JSON data in the req.body - Otherwise app crashing.
app.use(express.json());

// Use product route for api endpoints. /api/products simply prefixed for productRoutes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//! Here we must check if we are on production or development
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    // Express will serve up production assets
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    );
}

// ❗ Then listen for port
app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
