import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
    try {
        let oneItinerary = await Itinerary.findOne({ _id: req.params._id }).select(
            "name price photo"
        );
        return res.status(200).json({
            success: true,
            message: "Itinerary found!",
            response: oneItinerary,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Itinerary not found",
            response: null,
        });
    }
};


/* import Itinerary from '../../models/Itinerary.js'

export default async (req, res, next) => {
    try {
        let oneItinerary = await Itinerary.findById(req.params._id)
        if (oneItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary found',
                response: oneItinerary
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
        
    } catch (error) {
        next(error)
    }
} */