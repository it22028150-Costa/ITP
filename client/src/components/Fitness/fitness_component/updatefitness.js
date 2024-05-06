import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './fitnessupdate.css'

function UpdateFitness(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({
        name:"",
        address:"",
        u_email:"",
        f_goals:"",
        preferences:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3500/fitness/order_fitness/${id}`);
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
          const response = await fetch(`http://localhost:3500/fitness/update_fitness`, {
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

<h2> Update  Fitness Details</h2><br></br>
<lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={handleInputChange} value={updateorder?.name }/><br></br>
    <lable>Address:</lable>
    <input type="text" id="address" name="address"  onChange={handleInputChange} value={updateorder?.address }/><br></br>
    <lable>Email:</lable>
    <input type="email" id="u_email" name="u_email" onChange={handleInputChange} value={updateorder?.u_email }/><br></br> 
    <lable>Fitness Goals:</lable>
    <input type="text" id="f_goals" name="f_goals"  onChange={handleInputChange} value={updateorder?.f_goals }/><br></br> 
    <lable>Preferences:</lable>
    <input type="text" id="preferences" name="preferences"  onChange={handleInputChange} value={updateorder?.preferences }/><br></br> 
    
    <button onClick={handleUpdate} >Update</button><br></br> <br></br> 
  
 
        </div>
    )
}
export default UpdateFitness;