import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './healthupdate.css'

function UpdateHealth(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
      name:"",
      email:"",
      specialization:"",
      hospital:"",
      date:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3500/doctor/order/${id}`);
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
          const response = await fetch(`http://localhost:3500/doctor/:id`, {
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
<lable> Name:</lable>
    <input type="text" id="name" name="name" onChange={handleInputChange} value={updateorder?.name }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onC onChange={handleInputChange} value={updateorder?.email }/><br></br> 
    <lable>Specialization  :</lable>
    <input type="text" id="specialization" name="specialization"  onChange={handleInputChange} value={updateorder?.specialization }/><br></br>
   
    <lable>Hospital:</lable>
    <input type="text" id="hospital" name="hospital"  onChange={handleInputChange} value={updateorder?.hospital }/><br></br> 
       
    <lable>Available Date:</lable>
    <input type="date" id="date" name="date" onChange={handleInputChange} value={updateorder?.date }/><br></br> 
    
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
   
 
        </div>
    )
}
export default UpdateHealth;