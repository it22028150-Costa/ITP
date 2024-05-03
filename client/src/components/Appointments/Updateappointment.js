import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './appointmentupdate.css'

function UpdateAppointment(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
      doctor:"",
      date:"",
      time:"",
      remarks:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3500/appointments/order_appointment/${id}`);
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
          const response = await fetch(`http://localhost:3500/appointments/update_appointment`, {
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
            console.log(' updated successfully');
           alert(" updated successfully");

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
<lable>Select Doctor:</lable>
    <input type="text" id="doctor" name="doctor" onChange={handleInputChange} value={updateorder?.doctor }/><br></br>
    <lable>Select Date:</lable>
    <input type="text" id="date" name="date" onC onChange={handleInputChange} value={updateorder?.date }/><br></br> 
    <lable>Select Time:</lable>
    <input type="text" id="time" name="time"  onChange={handleInputChange} value={updateorder?.time }/><br></br>
    <lable>Add Remarks to Doctor:</lable>
    <input type="text" id="remarks" name="remarks"  onChange={handleInputChange} value={updateorder?.remarks }/><br></br>
    
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
   
 
        </div>
    )
}
export default UpdateAppointment;