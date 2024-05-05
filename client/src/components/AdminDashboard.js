// AdminDashboard.js

import React from "react";
import { Routes, Route,Link} from 'react-router-dom';


const AdminDashboard = () => {
    return (
        <div>
            <h1>Welcome to Admin Dashboard</h1>
            {/* Add any dashboard content here */}

            <div>
            <p style={{ fontSize: '18px', fontWeight:"bold" }}>
  <Link to="/admin/users" style={{ fontSize: '60px' }}>Users</Link> 
  <br/>
  <Link to="/admin/users" style={{ fontSize: '60px' }}>Staff</Link>
  <br/>

  <Link to="/admin/users" style={{ fontSize: '60px' }}>Appointments</Link>
  <br/>

  <Link to="/admin/users" style={{ fontSize: '60px' }}>Customer Complaints</Link>
  <br/>

</p>
                </div>
        </div>
    );
}

export default AdminDashboard;
