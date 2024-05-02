import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/article'>
          Article
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/article/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/article/ArticleList'>
                Article
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>
  );
};

export default Navbar;
