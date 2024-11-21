import Voiture from "../models/Voiture.js";
import Review from "../models/Review.js";


export const createReview = async (req, res) => {
    const voitureId = req.params.voitureId;
    const newReview = new Review({...req.body})
    try {
        const savedReview = await newReview.save()

        await Voiture.findByIdAndUpdate(voitureId,{
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({success: true, message: 'Review submitted',
            data: savedReview})

    } catch (err) {
        res.status(500).json({success: false, message: 'failed to submit'})
    }
};