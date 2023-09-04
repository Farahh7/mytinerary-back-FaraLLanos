import { Router } from "express";
import read from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import readOne from "../controllers/itineraries/readOne.js"; 
import update from "../controllers/itineraries/update.js"; 
import destroy from "../controllers/itineraries/destroy.js";
//import byCity from "../controllers/itineraries/byCity.js";

const itinerariesRouter = Router();

// CREATE
itinerariesRouter.post('/', create);

// READ
itinerariesRouter.get('/', read);

// READONE
itinerariesRouter.get('/:_id', readOne);

// UPDATE
itinerariesRouter.put('/:_id', update);

// DELETE
itinerariesRouter.delete('/:_id', destroy);
// By City
//itinerariesRouter.get('/:city_id', byCity);



export default itinerariesRouter;
