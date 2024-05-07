import { Outlet } from "react-router-dom";
import React from 'react'
import './Layout.css';

const Layout = () => {

  return <div class="page">
            <div class="header">
              <div class="logoPane">
                  <img class="logoImage" src="/Android.png" alt="Logo"/>
                  <div class="healthHub">Health Hub</div>
              </div>

              <div class="navBar">
                  
                  
                  <div class="navButtons">
                      
                      <a class="navBtn" href="/pharmacy">Pharmacy</a>
                      <a class="navBtn" href="/doctor/reservations">Doctor</a>
                      <a class="navBtn" href='/appointment'>Appointments</a>
                      <a class="navBtn" href='/finance'>Payments</a>
                      <a class="navBtn" href='/fitness'>Fitness</a>
                      <a class="navBtn" href='/article'>Articles</a>

                      <a class="navBtn" href='/complain'>Complaint</a>
                      <a id="homeBtn" href='/' class="navBtn">Sign Out</a>

                      
                  </div>
                  
                  
                  
                  
              </div>

            </div>
            <div class='background'>
              <Outlet/>
              <div class="footer">
                <div class="footerItem"> Terms of Service </div>
                <div class="footerItem"> Privacy Policy </div>
                <div class="footerItem"> Contact Us </div>
              </div>
            </div>
          </div>
}

export default Layout