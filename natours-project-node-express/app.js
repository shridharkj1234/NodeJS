const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./route/tourRouter');
const userRoute = require('./route/userRoute');
const app = express();

//
//MIDDLEWEAR
app.use(morgan('dev'))
app.use(express.json());
//Serving static file
app.use(express.static(`${__dirname}/public`));
//Router Middlewear
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users', userRoute);
//listening server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
