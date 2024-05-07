const Complaint = require("../models/complaintModel");

const getAllComplaint = async (req, res, next) => {
  let complain;
  // Get all Complaint
  try {
    complain = await Complaint.find();
  } catch (err) {
    console.log(err);
  }
  // not found
  if (!complain) {
    return res.status(404).json({ message: "Complaint not found" });
  }
  // Display all complain
  return res.status(200).json({ complain });
};

// data Insert
const addComplaint = async (req, res, next) => {
  const { name, gmail, date, time, phone, type, complaindetail } = req.body;

  let complain;

  try {
    complain = new Complaint({
      name,
      gmail,
      date,
      time,
      phone,
      type,
      complaindetail,
    });
    await complain.save();
  } catch (err) {
    console.log(err);
  }
  // not insert complains
  if (!complain) {
    return res.status(404).json({ message: "unable to add Complaint" });
  }
  return res.status(200).json({ complain });
};

//Get by Id
const getById = async (req, res, next) => {
  const id = req.params.id;

  let complain;

  try {
    complain = await Complaint.findById(id);
  } catch (err) {
    console.log(err);
  }
  // not available complains
  if (!complain) {
    return res.status(404).json({ message: "Complaint Not Found" });
  }
  return res.status(200).json({ complain });
};

//Update complain Details
const updateComplaint = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, date, time, phone, type, complaindetail, reply } =
    req.body;

  let complains;

  try {
    complains = await Complaint.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      date: date,
      time: time,
      phone: phone,
      type: type,
      complaindetail: complaindetail,
      reply: reply,
    });
    complains = await complains.save();
  } catch (err) {
    console.log(err);
  }
  if (!complains) {
    return res
      .status(404)
      .json({ message: "Unable to Update Complaint Details" });
  }
  return res.status(200).json({ complains });
};

//Delete complain Details
const deleteComplaint = async (req, res, next) => {
  const id = req.params.id;

  let complain;

  try {
    complain = await Complaint.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!complain) {
    return res
      .status(404)
      .json({ message: "Unable to Delete Complaint Details" });
  }
  return res.status(200).json({ complain });
};

exports.getAllComplaint = getAllComplaint;
exports.addComplaint = addComplaint;
exports.getById = getById;
exports.updateComplaint = updateComplaint;
exports.deleteComplaint = deleteComplaint;
