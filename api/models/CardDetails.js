const mongoose = require('mongoose')

const cardDetailsSchema = new mongoose.Schema({
    cardid: {
        type: mongoose.Schema.Types.ObjectId
        
    },

    nameoncard: {
        type: String,
        
    },

    useremail: {
        type: String,
        

    },

    cardno: {
        type: Number,
        
    },

    merchant: {
        type: String,
        

    },
    expdate: {
        type: Date,
        
    },

    cvv: {
        type: String,
        
    }
    
})

module.exports = mongoose.model('Card', cardDetailsSchema)