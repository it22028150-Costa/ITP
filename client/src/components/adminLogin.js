// AdminLogin.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    function handleAdminLogin(e) {
        e.preventDefault();

        // Hardcoded email and password for the admin
        const hardcodedEmail = "admin@example.com";
        const hardcodedPassword = "admin123";

        // Compare entered email and password with hardcoded values
        if (email === hardcodedEmail && password === hardcodedPassword) {
            // Redirect to admin dashboard
            navigate('/admin/dashboard');
        } else {
            // Show error if credentials are incorrect
            setShowError(true);
        }
    }

    return (
        <div>
            <h1>Admin Login</h1>
            {showError && <p style={{ color: "red" }}>Invalid email or password</p>}
            <form onSubmit={handleAdminLogin}>
                <div className="mb-3">
                    <label htmlFor="admin-email">Email</label>
                    <input type="email" className="form-control" id="admin-email" placeholder="Enter admin email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="admin-password">Password</label>
                    <input type="password" className="form-control" id="admin-password" placeholder="Enter admin password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

    
}
export default AdminLogin;