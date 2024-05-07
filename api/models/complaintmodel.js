const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  complaindetail: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
  },
});

module.exports = mongoose.model("complaindb", ComplaintSchema);
