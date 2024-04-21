
import { Outlet } from 'react-router-dom'
import './header.css'
function Header5(){
    return(
        <div>
<div class="navbardr">
  <a class="navicondr" href="/doctor">Home</a>
  <a class="navicondr" href="/doctor/healthdetails">Health Details</a>

  
</div>
<Outlet/>
        </div>
    )
}
export default Header5