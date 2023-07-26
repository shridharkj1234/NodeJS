const path = require('path');
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../dev-data/data/tours-simple.json'))
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    resultCount: tours.length,
    data: {
      tours,
    },
  });
};

const getToursById = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((el) => el.id == id);
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } else {
    res
      .status(404)
      .json({ status: 'fail', message: 'Id Mentioned not present' });
  }
};

const createNewTour = (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  tours.push({ id: newId, ...req.body });
  console.log(tours);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).send({
        status: 'success',
        data: tours[newId],
      });
    }
  );
};

const updateTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((el) => el.id == id);
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'Update code .....',
      },
    });
  } else {
    res
      .status(404)
      .json({ status: 'fail', message: 'Id Mentioned not present' });
  }
};
const deleteTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((el) => el.id == id);
  if (tour) {
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } else {
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
