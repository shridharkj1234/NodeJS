const mongoose = require('mongoose');

//Creating Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name of tour is required..'],
    unique: [true, 'Name must be unique'],
    trim: true
  },
  duration:{
    type:Number,
    require: [true, 'A tour must have duration']
  },
  maxGroupSize:{
    type:Number,
    require:[true,'A max group size is require']
  },
  difficulty:{
    type:String,
    require:[true,'dificulty of tour is require']
  },
  ratingsAverage: {
    type: Number,
    default: 4,
  }, 
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    require: [true, 'price of tour is required'],
  },
  priceDiscount:Number,
  summary:{
    type: String,
    trim: true
  },
  description:{
    type: String,
    trim: true,
    require:[true, 'A tour must have description']
  },
  imageCover:{
    type: String,
    require:[true,'A tour must have cover image']
  },
  images:[String],
  createdAt:{
    type: Date,
    default: Date.now()
  },
  startDates:[Date]
});

//Creating Model/Collection
const Tour = mongoose.model('tours', tourSchema);

module.exports=Tour;

