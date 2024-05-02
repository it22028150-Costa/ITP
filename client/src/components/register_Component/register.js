import { useState } from "react";
import axios from "axios";
import './register.css'

function Register() {
    const [order, setOrder] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("http://localhost:3500/pharmacy/create_user", order);
        console.log(data);
        alert("Registration Successful!");
    };

    return (
        <div className="register">
            <h2>Pharmacist Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" id="fname" name="fname" onChange={handleOnChange} /><br /><br />
                <label>Last Name :</label>
                <input type="text" id="lname" name="lname" onChange={handleOnChange} /><br /><br />
                <label>Email:</label>
                <input type="email" id="email" name="email" onChange={handleOnChange} /><br /><br />
                <label>Password:</label>
                <input type="password" id="password" name="password" onChange={handleOnChange} /><br /><br />
                <button id="regbtn">Register</button>
            <br />
            <a href="login">Already have an account? Login</a>
            </form>

        </div>
    );
}

export default Register;
