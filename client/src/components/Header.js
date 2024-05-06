import React from "react";
import './Header.css'
import { Routes, Route, Link} from 'react-router-dom';


function Header(){
    return(


<div className="horizontal-buttons">
  <a href="/appointment">
  <button className="image-button"> 
    <img src="./img1.jpg" alt="Button 1" /> <h1>Appointments</h1>
  </button>
  </a>

  <a href="/edit">
  <button className="image-button"> 
    <img src="./img1.jpg" alt="Button 1" /> <h1>Profile</h1>
  </button>
  </a>


  <a href="/finance">
  <button className="image-button"> 
    <img src="./img1.jpg" alt="Button 1" /> <h1>Payments</h1>
  </button>
  </a>
</div>



    )
}

export default Header; 