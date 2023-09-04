import Itinerary from '../../models/Itinerary.js';

export default async (req, res, next) => {
    try {
        const cityId = req.params.cityId;

        const itinerariesForCity = await Itinerary
            .find({ city_id: cityId }, '-createdAt -updatedAt -__v')
            .populate({
                path: "city_id",
                select: "city photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name"
                }
            });

        if (itinerariesForCity.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: itinerariesForCity
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'no itineraries found for the city',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
