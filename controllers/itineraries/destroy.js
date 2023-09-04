import Itinerary from '../../models/Itinerary.js';

export default async (req, res, next) => {
    try {
        const itineraryId = req.params.Itinerary_id; // Usar req.params.Itinerary_id

        let deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);

        if (deletedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary deleted',
                response: deletedItinerary
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};
