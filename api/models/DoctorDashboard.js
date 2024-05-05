const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  
});

// Method for fetching appointments for the current day
doctorSchema.methods.getAppointments = async function() {
  try {
    const appointments = await this.model('DoctorAppointment').find({ 
      doctor: this._id, 
      date: { $gte: new Date().setHours(0, 0, 0, 0) } 
    });
    return appointments;
  } catch (error) {
    throw new Error('Failed to fetch appointments');
  }
};

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;