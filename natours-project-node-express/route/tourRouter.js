const express = require('express');
const { getAllTours, getToursById, createNewTour, updateTour, deleteTour } = require("../controller/toursController")
const router = express.Router();

// get all tours
router.get('/',getAllTours);

//get tour by ID
router.get('/:id', getToursById);

//create new tour
router.post('/', createNewTour);

//Update tour...
router.patch('/:id',updateTour );

//delete route BY ID
router.delete('/:id', deleteTour);

module.exports=router
