import mongoose from "mongoose";

// Create schema for products like creating Types for Typescript
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // creaedAt & updatedAt fields
);

// Create model with schema and export it
const Product = mongoose.model("Product", productSchema);

export default Product;
