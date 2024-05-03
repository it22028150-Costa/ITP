import { useState } from "react";
import axios from "axios";
import './dilivery.css'


function AddDilivery(){
    const [order,setorder]=useState({
        name:"",
        contact:"",
        phone:"",
        address:"",
        m_name:"",
        dosage:"",
        quantity:"",
        instructions:"",
        payment_method:"",
        p_name:"",
        m_details:"",
        special_instruction:"",
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
       const data=await axios.post("http://localhost:3500/pharmacy/del/create_dilivery",order) 
          console.log(data)
          alert("Delivery details added successfully!")
         
     
    }


    return(
        <div className="add-order">
        
<h2>Personal Information</h2>
    <form onSubmit={handlesubmit}>
    <lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable>Contact Number:</lable>
    <input type="text" id="contact" name="contact" minLength={10} maxLength={10} onChange={handleonchange}/><br></br>
    
<h2>Delivery Information</h2>  
    <lable>Address:</lable>  
    <input type="text" id="address" name="address" onChange={handleonchange}/><br></br> 
<h2>Medication Details</h2>    
    <lable>Medicine Name:</lable>
    <input type="text" id="m_name" name="m_name" onChange={handleonchange}/><br></br> 
    <lable>Dosage:</lable>
    <input type="text" id="dosage" name="dosage" onChange={handleonchange}/><br></br> 
    <lable>Quantity:</lable>
    <input type="text" id="quantity" name="quantity" onChange={handleonchange}/><br></br> 
    <lable>Instruction:</lable>
    <input type="text" id="instructions" name="instructions" onChange={handleonchange}/><br></br> 
<h2>Payment Information</h2>   
    <lable>Payment Method:</lable>
    <select id="payment_method" name="payment_method" onChange={handleonchange}>
        <option>Visa / Mastercard</option>
        <option>Cash on Delivery</option>
    </select>

<h2>Prescription Details</h2>
    <lable>Prescriber's Name:</lable>
    <input type="text" id="p_name" name="p_name" onChange={handleonchange}/><br></br> 
    <lable>Medication Details:</lable>
    <input type="text" id="m_details" name="m_details" onChange={handleonchange}/><br></br> 

<h2>Additional Notes</h2>
    <lable>Special Instruction:</lable>
    <input type="text" id="special_instruction" name="special_instruction" onChange={handleonchange}/><br></br> 

<h2>Consent</h2>
     <lable>Agree to Terms and Condtions:</lable>
     <input type="checkbox"></input><br></br> 


    <button>Add Delivery</button>

    </form><br></br> 
   
        </div>
    )
}
export default AddDilivery;