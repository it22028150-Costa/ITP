import { useState } from "react";
import  { useEffect,  } from 'react'
import axios from "axios";
import './appointment.css'






function Appointment(){
    const [doctor,setdoctor] = useState([])

    useEffect(() => {
        const fetchDoctors = async () => {
            try{
                const response = await axios.get('http://localhost:3500/doctor/listdr');
                setdoctor(response.data);
                console.log(doctor)
            }catch(err){
                console.error(err);
                alert(err.response.data.message)
                
            }
        };
        fetchDoctors(); 
    
      },[]);



    const [order,setorder]=useState({
    doctor:"",
    patientemail:localStorage.getItem("currentUser"),
    date:"",
    time:"",
    remarks:"",
    amount:4500,
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
    <input type="text" id="doctor" name="doctor" list="drlist" onChange={handleonchange}/><br></br>
    <datalist  id="drlist" onChange={handleonchange}>
        {
            doctor.map((e)=>{
                return(
                    <option value={`${e.name}`}></option>
                )
            })
        }
    </datalist>
    <lable>Select Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> <br></br>
    <lable>Select Time:</lable>
    <input type="time" id="time" name="time" onChange={handleonchange}/><br></br> 
    <lable>Add Remarks to Doctor:</lable>
    <input type="text" id="remarks" name="remarks" onChange={handleonchange}/><br></br>
    

    <button type="submit">Create reservation</button>


    </form><br></br> 
   
        </div>
    )
}
export default Appointment;