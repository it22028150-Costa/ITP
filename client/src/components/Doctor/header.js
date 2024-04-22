
import { Outlet } from 'react-router-dom'
import './header.css'
function Header5(){
    return(
        <div>
<div class="navbardr">
  <a class="navicondr" href="/doctor">Dashboard</a>
  <a class="navicondr" href="/doctor/healthdetails">Doctor Availablility</a>

  
</div>
<Outlet/>
        </div>
    )
}
export default Header5