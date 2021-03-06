const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  location: {
    type: String,
    required: '{PATH} is required!',
    unique: true,
  },
  totalParkingSpots: {
    type: Number,
    default: process.env.TOTAL_PARKING_SPOTS,
  },
  parkingSpotsInUse: {
    type: Number,
    default: 0,
  },
});

schema.virtual('parkingAvailable').get(function() {
  return this.totalParkingSpots - this.parkingSpotsInUse;
});

module.exports = mongoose.model('Parking', schema);
