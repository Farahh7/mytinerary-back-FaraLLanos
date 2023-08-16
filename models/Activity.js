import { model, Schema, Types  } from "mongoose";

let collection = "activities"
let activitySchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String },
    itinerary_id: { type: Types.ObjectId, required: true, ref: 'itineraries' }
})

let Activity = model(collection, activitySchema);

export default Activity;
