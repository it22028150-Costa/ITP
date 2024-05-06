import React from 'react';
import { Link } from 'react-router-dom';
import "./Public.css";

const Public = () => {
  if(localStorage.getItem('currentUser')){
    localStorage.removeItem('currentUser');
    console.log('Removed login information');
  }else{
    console.log('No saved Login information')
  }
  return (

    <div id='bgimage'>
    <section className="public">

    <section className="public" class="background">

      <header>
        <h1>Welcome to <span className="nowrap">HealthHub</span></h1>
      </header>
      <main className="public_main">
        <p>Healthhub is your one-stop application for all your healthcare needs</p>
        <h5>Explore our features:</h5>

        

        
        <button type="button" class="image-button">
        <img src= "./img1.jpg" width="250"/>
      </button>

      <button type="button" class="image-button">
        <img src= "./img2.jpg" width="250"/>
      </button>

      <button type="button" class="image-button">
        <img src= "./img1.jpg" width="250"/>
      </button>

      <button type="button" class="image-button">
        <img src= "./img1.jpg" width="250"/>
      </button>

        <ul>
          <li>Book appointments with ease</li>
          <li>Find nearby doctors and pharmacies</li>
          <li>Keep track of your medical records</li>
        </ul>

        <div className="button-container">
        <button className="btn"> 
          <Link to="/signup">Sign up</Link>
        </button>
        <button className="btn"> 
          <Link to="/loginpg">Login</Link>
        </button>
      </div>


      </main>
      <footer>

      <address>
          SLIIT,<br/>
          Kaduwela Road,<br/>
          Malabe<br/>
          <a href="tel:+94112412265">011-2412265</a>
        </address>


      </footer>

        <button>
          <Link to="/signup">Sign up</Link>
        </button>
        <button>
          <Link to="/loginpg">Login</Link>
        </button>
      </main>
     

    </section>
    </div>
  );
}

export default Public;
