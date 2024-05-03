
import { Outlet } from 'react-router-dom'
import './header.css'
function Header(){
    return(
        <div>
        <div class="navbar">
          <a href="/Fitness">Register</a>
          <a href="/fitness/registerdetails">Register Details</a>
          <a href="/fitness/addfitness">Add Fitness</a>
          <a href="/fitness/fitnessdetails">Fitness Details</a>
          
        </div>

        <Outlet/>

        </div>
    )
}
export default Header