import express from 'express';
//el enrutador principal va a llamar a todos los recursos y los va a enrutar 
import userRouter from './users.js';
import cityRouter from './cities.js'

import itinerariesRouter from './itineraries.js';
import activitiesRouter from './activities.js'
import authRouter from './auth.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users',userRouter);  
//router.use acepta como minimo 2 parametros para poder enrutar correctamente
//1º la palabra con la que se va a enrutar
//2º el enrutador que tengo que conectar
router.use('/cities',cityRouter)

router.use('/itineraries',itinerariesRouter)
router.use('/activities', activitiesRouter)
router.use('/auth',authRouter)

export default router
