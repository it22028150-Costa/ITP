
import { Outlet } from 'react-router-dom'
import './headerdoctor.css'
function Header5(){
    return(
        <div>
<div class="navbar">
  <a href="/doctor">Home</a>
  <a href="/doctor/healthdetails">Health Details</a>

  
</div>
<Outlet/>
        </div>
    )
}
export default Header5