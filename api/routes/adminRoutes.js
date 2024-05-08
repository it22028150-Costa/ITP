// routes/adminRoutes.js

const express = require("express");
const router = express.Router();

const {adminLogin} = require("../controllers/adminController")

const admin = require("../models/Admin");


// Route for admin login
router.get("/login", adminLogin);

module.exports = router;