import { useState } from "react";
import axios from "axios";
import './health.css'

function Health(){
    const [order,setorder]=useState({
        name:"",
        email:"",
        specialization:"",
        hospital:"",
        date:"",
    });

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((prev)=>{
            return {
                ...prev,
                [name]:value
            };
        });
    };
    //validation part to check if all fields are complete
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!order.name || !order.email || !order.specialization || !order.hospital || !order.date) {
            alert("Please fill in all fields");
            return;
        }
    //validation part to check if the name contais only characters

        if (/\d/.test(order.name)) {
            alert("Name should not contain numbers");
            return;
        }
    
        const data = await axios.post("http://localhost:3500/doctor/", order);
        console.log(data);
        alert("Details added successfully!");
    };
    

    return(
        <div className="add-order">
            <h2>Add available date</h2>
            <form onSubmit={handlesubmit}>
                <lable> Name:</lable>
                <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
                <lable>Email:</lable>
                <input type="text" id="email" name="email" onChange={handleonchange}/><br></br> 
                <lable>Specialization  :</lable>
                <input type="text" id="specialization" name="specialization" onChange={handleonchange}/><br></br>
                <lable>Hospital:</lable>
                <input type="text" id="hospital" name="hospital" onChange={handleonchange}/><br></br> 
                <lable>Available Date:</lable>
                <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> <br></br> 
                <button id="hbtn">Add Date</button>
            </form><br></br> 
        </div>
    );
}

export default Health;