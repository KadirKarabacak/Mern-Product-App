import express from "express";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// ⚪ Create GET endpoint - Normal /api/products
router.get("/", getProducts);

// 🟢 Create POST endpoint - Normal /api/products
router.post("/", createProduct);

// 🟠 Create UPDATE endpoint - Normal /api/products/:id
router.put("/:id", updateProduct);

// 🔴 Create DELETE endpoint - Normal /api/products/:id
router.delete("/:id", deleteProduct);

export default router;
