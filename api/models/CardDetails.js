const mongoose = require('mongoose')

const cardDetailsSchema = new mongoose.Schema({
    cardid: {
        type: mongoose.Schema.Types.ObjectId
        
    },

    nameoncard: {
        type: String,
        required:true
    },

    useremail: {
        type: String,
        required:true

    },

    cardno: {
        type: Number,
        required:true
    },

    merchant: {
        type: String,
        required:true

    },
    expdate: {
        type: Date,
        required:true
    },

    cvv: {
        type: String,
        required:true
    }
    
})

module.exports = mongoose.model('Card', cardDetailsSchema)