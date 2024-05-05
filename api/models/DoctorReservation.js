const mongoose = require('mongoose')

const doctorReservationSchema = new mongoose.Schema({
    doctormail: {
        type: String
        
    },

    date: {
        type: String
    },

    time: {
        type: String,

    },
    
    patientname:{
        type: String,
    },

    remarks:{
        type: String
    },

    
},{
    collection: 'drReservations' 
});

module.exports = mongoose.model('drReservations', doctorReservationSchema)