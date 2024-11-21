import Voiture from "../models/Voiture.js";

// create new Voiture
export const createVoiture = async (req, res) => {
    const newVoiture = new Voiture(req.body);

    try {
        const savedVoiture = await newVoiture.save();

        res
        .status(200)
        .json({
            success: true,
            message: "Successfully created",
            data: savedVoiture,
        });
    } catch (err) {
        res
        .status(500)
        .json({ success: false, message: "Failed to create. Try again" });
    }
};