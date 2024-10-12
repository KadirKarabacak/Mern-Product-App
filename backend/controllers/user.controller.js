import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    const user = req.body; // user will send this data

    // Control missing fields
    if (!user.name || !user.email || !user.password || !user.repeatPassword)
        return res
            .status(400)
            .json({ success: false, message: "Please provide all fields" }); // User based errors is 400

    // Crete new user
    const newUser = new User(user);

    // Save to database
    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.log("Error in creating User:", error.message);
        res.status(500).json({ success: false, message: "Server Error" }); // Server Errors always 500
    }
};
