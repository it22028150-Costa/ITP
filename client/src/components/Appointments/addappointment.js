import { useState } from "react";
import axios from "axios";
import './appointment.css'


function Appointment(){
    const [order,setorder]=useState({
    doctor:"",
    patientemail:localStorage.getItem("currentUser"),
    date:"",
    time:"",
    remarks:"",
    amount:0,
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:3500/appointments/create_appointment",order)
          console.log(data)
          alert("Details added successfully!")
         
     
    }


    return(
        <div className="add-order">
 
<h2>Appointment Booking</h2>
    <form onSubmit={handlesubmit}>
    <lable> Select Doctor:</lable>
    <input type="text" id="doctor" name="doctor" onChange={handleonchange}/><br></br>
    <lable>Select Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> <br></br>
    <lable>Select Time:</lable>
    <input type="time" id="time" name="time" onChange={handleonchange}/><br></br> 
    <lable>Add Remarks to Doctor:</lable>
    <input type="text" id="remarks" name="remarks" onChange={handleonchange}/><br></br>
    <lable>Amount:</lable>
    <input type="number" id="amount" name="amount" onChange={handleonchange}/><br></br>

    <button type="submit">Create reservation</button>


    </form><br></br> 
   
        </div>
    )
}
export default Appointment;