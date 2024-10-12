import mongoose from "mongoose";

// Create schema for users like creating Types for Typescript
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        repeatPassword: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // creaedAt & updatedAt fields
);

// Create model with schema and export it
const User = mongoose.model("User", userSchema);

export default User;
