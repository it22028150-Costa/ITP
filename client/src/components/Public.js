import React from 'react';
import { Link } from 'react-router-dom';
import "./Public.css";

const Public = () => {
  if(localStorage.getItem('currentUser')){
    localStorage.removeItem('currentUser');
    console.log('Removed login information');
  } else {
    console.log('No saved Login information')
  }
  return (
    <div id='bgimage'>
      <section className="public" class="background">
      <main className="public_main">

      <h1 style={{ textAlign: "center", color: "black", marginTop: "3%", fontFamily: "Arial, sans-serif", fontSize: "36px" }}>Welcome to HealthHub</h1>



          <p>Healthhub is your one-stop application for all your healthcare needs</p>


          <button type="button" class="image-button">
            <img src="./img2.jpg" width="250"/> Book appointments with ease
          </button>
          <button type="button" class="image-button">
            <img src="./img1.jpg" width="250"/>Find nearby doctors and pharmacies
          </button>
          <button type="button" class="image-button">
            <img src="./medd.jpg" width="250"/>Keep track of your medical records
          </button>

          <br/>             <br/>
          <br/>
          <br/>
          <div className="button-container">
            <button className="btn"> 
              <Link to="/signup">Sign up</Link>
            </button>
            <button className="btn"> 
              <Link to="/loginpg">Login</Link>
            </button>
          </div>
          <br/>

          <footer>
            <address>
              SLIIT,<br/>
              Kaduwela Road,<br/>
              Malabe<br/>
              <a href="tel:+94112412265">011-2412265</a>
            </address>
          </footer>
        </main>
      </section>
    </div>
  );
}

export default Public;