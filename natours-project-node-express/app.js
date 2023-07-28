const express = require('express');
const fs=require("fs");
const morgan = require('morgan');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const tourRouter = require('./route/tourRouter');
const userRoute = require('./route/userRoute');
const Tour = require('./model/tourModel');
const app = express();
dotenv.config({ path: './config.env' });

//MongoDB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  })
  .then((con) => {
    console.log('connection successfull.....');
  })
  .catch((err) => {
    console.log('Unable to Connect errr 🛑🛑', err);
  });

//MIDDLEWEAR
app.use(morgan('dev'));
app.use(express.json());
//Serving static file
app.use(express.static(`${__dirname}/public`));
//Router Middlewear
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoute);
//listening server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
