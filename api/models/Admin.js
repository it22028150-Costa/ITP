const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    AdminName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true}
    });

module.exports = mongoose.model('Admin', adminSchema);