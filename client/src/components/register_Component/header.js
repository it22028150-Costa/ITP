
import './header.css'
import { Outlet } from 'react-router-dom'
function Header(){
    return(
        <div>
<div class="navbar">
  <a href="/">Home</a>
  <a href="/pharmacy/registerdetails">Register Details</a>

  <a href="/pharmacy/adddilivery">Add Delivery</a>
  <a href="/pharmacy/diliverydetails">Delivery Details</a>
  
</div>
<Outlet/>

        </div>
    )
}
export default Header