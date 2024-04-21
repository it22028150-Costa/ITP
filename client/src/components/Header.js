import React from "react";
import './Header.css'
import { Routes, Route} from 'react-router-dom';


function Header(){
    return(
                <div>
<div class="navbardrlm">
  <a class="navicondrlm" href="#"><b>Appointments</b></a>
  <a class="navicondrlm" href="/edit"><b>Profile</b></a>
  <a class="navicondrlm" href="#"><b>Find a Doctor</b></a>


  
</div>

      <div>

      </div>

            {/* Search Form */}
            <div className="container mt-3">
              
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>   
    )
}

export default Header; 