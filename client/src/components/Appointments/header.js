
import { Outlet } from 'react-router-dom'
import './header.css'
function Header5(){
    return(
      <div>
        <div>
            <div class="navbar">
              <a href="/appointment">Home</a>
              <a href="/appointment/appointmentdetails">Appointment Details</a>

  
            </div>

            <Outlet/>

        </div>
      </div>
    )
}
export default Header5