const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: {
    ref: 'Doctor',
    type: String,
    required: true
  },
  Patient: {
    
    ref: 'Doctor',
    type: String,
    required: true
  },

  date: {
    ref: 'Doctor',
    type: Date,
    required: true
  },

  // Other fields like patient name, date, time, etc.
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;