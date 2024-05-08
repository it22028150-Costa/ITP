import React from "react";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div style={styles.containersidebar}>
            <div style={styles.sidebar}>
                <ul>
                    <li><Link to="/admin/users">Users</Link></li>
                    <br/>

                    <li><Link to="/admin/staff">Staff</Link></li>
                    <br/>

                    <li><Link to="/admin/appointments">Appointments</Link></li>
                    <br/>

                    <li><Link to="/admin/complaints">Customer Complaints</Link></li>
                </ul>
            </div>
            <div style={styles.content}>
                
                <div style={{ marginBottom: '20px' }}>
                <h1>Welcome to Admin Dashboard</h1>

                    <img src="/admin.jpg" alt="Admin Photo" style={{ width: '100%', borderRadius: '5px' }} />
                </div>
                {/* Content of your dashboard goes here */}
            </div>
        </div>
    );
}

export default AdminDashboard;

const styles = {
    containersidebar: {
        display: 'flex',
        minHeight: '100vh'
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#ffffff',
        padding: '20px'
    },
    content: {
        flex: '1',
        padding: '20px'
    }
};
