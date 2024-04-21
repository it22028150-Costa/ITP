import React from 'react'
import { Outlet } from 'react-router-dom'
import './FinanceLayout.css'

const FinanceLayout = () => {
  return (
    <div class='payment'>
        <div class='sidebar'>
            <div>Make Payment</div>
            <div>View Order Details</div>
            <div>Payment History</div>
        </div>

        <div class='contentout'>
            
            <Outlet/>    


        </div>
    </div>
  )
}

export default FinanceLayout