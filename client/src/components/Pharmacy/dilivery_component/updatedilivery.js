import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './diliveryupdate.css'

function UpdateDilivery(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
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

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3500/pharmacy/order_dilivery/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdateorder(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdateorder({
          ...updateorder,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:3500/pharmacy/del/update_dilivery`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updateorder._id,
              ...updateorder,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('Order updated successfully');
           alert("Delivery Information Updated Successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='order-update'>

<h2>Personal Information</h2>
    
    <lable>Name:</lable>
    <input type="text" id="name" name="name"  onChange={handleInputChange} value={updateorder?.name }/><br></br>
    <lable>Contact :</lable>
    <input type="text" id="contact" name="contact" onChange={handleInputChange} value={updateorder?.contact }/><br></br>
    <lable>Number:</lable>
    <input type="text" id="phone" name="phone" onC onChange={handleInputChange} value={updateorder?.phone }/><br></br>
<h2>dilivery Information</h2>  
    <lable>Address:</lable>  
    <input type="text" id="address" name="address"  onChange={handleInputChange} value={updateorder?.address }/><br></br> 
<h2>Medication Details</h2>    
    <lable>Medicine Name:</lable>
    <input type="text" id="m_name" name="m_name"  onChange={handleInputChange} value={updateorder?.m_name }/><br></br> 
    <lable>Dosage:</lable>
    <input type="text" id="dosage" name="dosage"  onChange={handleInputChange} value={updateorder?.dosage }/><br></br> 
    <lable>Quantity:</lable>
    <input type="text" id="quantity" name="quantity"  onChange={handleInputChange} value={updateorder?.fnaquantityme }/><br></br> 
    <lable>Instruction:</lable>
    <input type="text" id="instructions" name="instructions"  onChange={handleInputChange} value={updateorder?.instructions }/><br></br> 
<h2>Payment Information</h2>   
    <lable>Payment Method:</lable>
    <select id="payment_method" name="payment_method"  onChange={handleInputChange} value={updateorder?.payment_method }>
        <option>card payment</option>
        <option>cash on dilivery</option>
    </select>






<h2>Prescription Details</h2>
    <lable>Prescription's Name:</lable>
    <input type="text" id="p_name" name="p_name"  onChange={handleInputChange} value={updateorder?.p_name }/><br></br> 
    <lable>Medication Details:</lable>
    <input type="text" id="m_details" name="m_details"  onChange={handleInputChange} value={updateorder?.m_details }/><br></br> 

<h2>Additional Notes</h2>
    <lable>Special Instruction:</lable>
    <input type="text" id="special_instruction" name="special_instruction"  onChange={handleInputChange} value={updateorder?.special_instruction }/><br></br> 

<h2>Consent</h2>
     <lable>Aggrement to terms and condtions:</lable>
     <input type="checkbox"></input><br></br> 
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
  
 
        </div>
    )
}
export default UpdateDilivery;