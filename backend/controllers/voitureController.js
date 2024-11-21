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

// update voiture
export const updateVoiture = async (req, res) => {
    const id = req.params.id

    try {
        const updateVoiture = await Voiture.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res
        .status(200)
        .json({
            success: true,
            message: "Successfully updated",
            data: updateVoiture,
        });
    }catch (err) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to update",
        });
    }
};

// delete voiture
export const deleteVoiture = async (req, res) => {
    const id = req.params.id

    try {
        const deleteVoiture = await Voiture.findByIdAndDelete(id);

        res
        .status(200)
        .json({
            success: true,
            message: "Successfully deleted",
        });
    }catch (err) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to delete",
        });
    }
};

// get one voiture
export const getOneVoiture = async (req, res) => {
    const id = req.params.id

    try {
        const voiture = await Voiture.findById(id).populate("reviews");

        res
        .status(200)
        .json({
            success: true,
            message: "info voiture",
            data: voiture,
        });
    }catch (err) {
        res
        .status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};

// get all voiture
export const getAllVoiture = async (req, res) => {
    const page = parseInt(req.query.page);

    try{
        const voitures = await Voiture.find({})
        .populate("reviews")
        .skip(page * 8)
        .limit(8);

        res
        .status(200)
        .json({ success: true, count: voitures.length, message: "Successful", data: voitures});
    } catch (err) {
        res
        .status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};

// get voiture by serach
export const getVoitureBySearch = async(req,res) => {
    const local = new RegExp(req.query.local, 'i')
    // const agence = new RegExp(req.query.agence, 'i')
    // const category = new RegExp(req.query.category, 'i')
    // const transmistion = new RegExp(req.query.transmistion, 'i')
    // const pricejour = new RegExp(req.query.pricejour, 'i')

    try {
        const voitures = await Voiture.find({ local}).populate("reviews");

        res.status(200).json({
            success: true,
            message: "Successful",
            data: voitures,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
 }
};

// get featured voiture
export const getFeaturedVoiture = async (req, res) => {

    try{
        const voitures = await Voiture.find({featured:true})
        .populate("reviews")
        .limit(8);

        res
        .status(200)
        .json({ success: true, count: voitures.length, message: "Successful", data: voitures});
    } catch (err) {
        res
        .status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};

// get voiture count
export const getVoitureCount = async (req, res) => {
    try {
        const voitureCount = await Voiture.estimatedDocumentCount();

        res.status(200).json({ success: true, data: voitureCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch" });
    }
};