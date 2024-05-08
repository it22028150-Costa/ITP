import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Forms.css";

export default function Login() {

    const [emailadd, setEmail] = useState("");
    const [passwordadd, setPassword] = useState("");

    function log(e) {
        e.preventDefault();
        axios.get(`http://localhost:3500/user/loginpg`, { params: { email: emailadd, password: passwordadd } })
            .then((result) => {
                if (result.data.message === "Login successful") {
                    console.log(result.data.message);
                }
                localStorage.setItem('currentUser', emailadd);
                console.log(`The current user is ${localStorage.getItem('currentUser')}`);
                window.location.href = '/header';
            }).catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });
    }

    return (
        <div className="containerlmwuseradmin" style={{ marginTop: "50px" }}>
            <header style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}> LOGIN </header>
            <h3>Welcome back !</h3>
            <form onSubmit={log} style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                <div className="mb-3">
                    <label htmlFor="email"> Email </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                <p>Admin? <Link to="/admin/login">Login here</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/doctor/doctorlogin">Doctor Login </Link></p>
            </div>
        </div>
    )
}
