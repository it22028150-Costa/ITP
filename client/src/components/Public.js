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
    <section className="public">
      <header>
        <h1>Welcome to <span className="nowrap">HealthHub</span></h1>
      </header>
      <main className="public_main">
        <p>Healthhub is your one-stop application for all your healthcare needs</p>
        Explore our features:
        <ul>
          <li>Book appointments with ease</li>
          <li>Find nearby doctors and pharmacies</li>
          <li>Keep track of your medical records</li>
        </ul>
        <address>
          SLIIT,<br/>
          Kaduwela Road,<br/>
          Malabe<br/>
          <a href="tel:+94112412265">011-2412265</a>
        </address>
      </main>
      <footer>
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
        <button>
          <Link to="/loginpg">Login</Link>
        </button>
      </footer>
    </section>
  );
}

export default Public;
