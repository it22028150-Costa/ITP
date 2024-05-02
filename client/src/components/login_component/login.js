import React, { useState } from 'react';
import './login.css'

function Login() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
      });
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        try {
            const response = await fetch('http://localhost:3500/pharmacy/login_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            console.log(response.status);
            if (response.ok) {
                alert(data.message); 
            } else {
                alert(data.message); 
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    

    return(
       
    <div className='add-user'>
    
    <form onSubmit={handleSubmit}>
    <lable> Email:</lable>
    <input type="text" id="email" name="email" onChange={handleOnChange}/><br></br>
    <lable>Password:</lable>
    <input type="text" id="password" name="password" onChange={handleOnChange}/><br></br>
   
     <br></br> <br></br> <br></br> 
     <button>Log in</button>
  </form>
  <button> <a href="/">Next</a> </button>

 
        </div>
        
    )
}

export default Login;