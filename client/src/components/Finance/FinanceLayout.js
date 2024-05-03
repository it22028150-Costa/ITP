import React from 'react'
import { Outlet } from 'react-router-dom'
import './FinanceLayout.css'

const FinanceLayout = () => {
  return (
    <div class='payment'>
        <div class='sidebar'>
            <a href='/finance' id="navbtnfn">Payment History</a>
            <a href='/finance/card' id="navbtnfn">Edit Card Details</a>
        </div>

        <div class='contentout'>
            
            <Outlet/>    


        </div>
    </div>
  )
}

export default FinanceLayout