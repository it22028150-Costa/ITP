// controllers/authController.js

const Admin = require('../models/Admin'); // Assuming you have an Admin model

// Controller function for admin login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find admin by email
        const admin = await Admin.findOne({ email });

        // Check if admin exists
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password is correct
        if (password !== admin.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Admin authenticated successfully
        res.status(200).json({ message: 'Admin login successful', admin });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    adminLogin
};
