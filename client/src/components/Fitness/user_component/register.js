import { useState } from "react";
import axios from "axios";
import './register.css'


function Register(){
    const [order,setorder] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
    });

    const handleOnchange = (e) => {
        const { value,name }= e.target;
        setorder((prev) => ({
                ...prev,
                [name]:value
               
          }));
       
        
    };

   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("https://localhost:3500/fitnessuser/create_user", order);
        console.log(data)
        alert("Registration Successful!");
    };
        
     
    return(
        <div className="register">
        
<h2>Registation Form</h2>
    <form onSubmit={handleSubmit}>
    <lable>First Name:</lable>
    <input type="text" id="fname" name="fname" onChange={handleOnchange}/><br></br>
    <lable>Last Name :</lable>
    <input type="text" id="lname" name="lname" onChange={handleOnchange}/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleOnchange}/><br></br> 
    <lable>Paasword:</lable>
    <input type="text" id="password" name="password" onChange={handleOnchange}/><br></br> 
    <button type="submit">Register</button>
    
    </form><br></br> 
    
        </div>
    )
}
export default Register;