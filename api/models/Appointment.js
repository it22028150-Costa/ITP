const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    patientName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);