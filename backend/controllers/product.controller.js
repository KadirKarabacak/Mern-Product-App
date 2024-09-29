import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Get Products ⚪
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // {} empty object refers to find all products
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" }); // Server Errors always 500
    }
};

// Create Product 🟢
export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    // Control Missing fields
    if (!product.name || !product.price || !product.image)
        return res
            .status(400)
            .json({ success: false, message: "Please provide all fields" }); // User based errors is 400

    // Crete new product
    const newProduct = new Product(product);

    // Save to database
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error in creating Product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" }); // Server Errors always 500
    }
};

// Update Product 🟠
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    // Check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Product ID is not valid" });
    }

    // Update product
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {
            new: true,
        }); // new: true returns updated product, otherwise returns old product

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.log("Error in Updating Product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
// Delete Product 🔴
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    // Check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Product ID is not valid" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        console.log("Error in Deleting Product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
