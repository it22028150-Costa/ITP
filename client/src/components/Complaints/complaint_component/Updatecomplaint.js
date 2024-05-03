import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './complaintupdate.css'

function UpdateComplaint(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
      contact:"",
        c_email:"",
        c_type:"",
        description:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3500/complaints/order_complaint/${id}`);
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
          const response = await fetch(`http://localhost:3500/complaints/update_complaint`, {
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
           alert("Order updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='order-update'>

<h2> Update Details</h2><br></br>
<lable>Contact Number:</lable>
    <input type="text" id="contact" name="contact"    onChange={handleInputChange} value={updateorder?.contact }/><br></br>
    <lable>Email Address  :</lable>
    <input type="text" id="c_email" name="c_email"     onChange={handleInputChange} value={updateorder?.c_email }/><br></br>
    <lable>Complaint Type:</lable>
    <select id="c_type" name="c_type"     onChange={handleInputChange} value={updateorder?.c_type }>
        <option>medical care issue</option>
        <option>coommunicatin</option>
        <option>staff behavaiour</option>
        <option>facility conditions</option>
        <option>administrative issues</option>
    </select><br></br><br></br><br></br>
 
    
    <lable>Description:</lable>
    <textarea  type="text" id="description" name="description" height="10px"onChange={handleInputChange} value={updateorder?.description }/><br></br> <br></br>
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateComplaint;