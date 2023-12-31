import express from 'express'

import create from '../controllers/activities/create.js'
import read from '../controllers/activities/read.js'
import readOne from '../controllers/activities/readOne.js'
import update from '../controllers/activities/update.js'
import destroy from '../controllers/activities/destroy.js'


let router = express.Router()

//CREATE
router.post('/', create)

//READ
router.get('/', read)


//READONE-
router.get('/:_id', readOne);

//UPDATE
router.put('/:_id', update)

//DELETE
router.delete('/:_id', destroy)



export default router