const Tour = require('../model/tourModel');

const getAllTours = (req, res) => {
    let queryString = JSON.stringify({...req.query});
    queryString=JSON.parse(queryString.replace(/\bgte|gt|lt|lte\b/g,((match)=> `$${match}`)));
    console.log(queryString);
    Tour.find(queryString)
      .then((tours) => {
        res.status(200).json({
          status: 'success',
          resultCount: tours.length,
          data: {
            tours,
          },
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: `Failed.....${err}`,
        });
      });
};

const getToursById = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'fail', message: 'Id Mentioned not present' });
  }
};

const createNewTour = (req, res) => {
  Tour.create(req.body)
    .then((doc) => {
      res.status(201).json({
        message: 'Success',
        data: {
          tour: doc,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed due to invalid data 🛑🛑',
      });
    });
};

const updateTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.status(200).json({
      status: 'successfully updated !!!',
      data: {
        tour,
      },
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'fail', message: 'Something went wrong...' });
  }
};
const deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(204).json({
      status: 'deleted successfully',
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: 'fail', message: 'Id Mentioned not present' });
  }
};
module.exports = {
  getAllTours,
  getToursById,
  createNewTour,
  updateTour,
  deleteTour,
};
