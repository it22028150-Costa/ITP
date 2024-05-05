import React, { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import { Link, Outlet } from 'react-router-dom';



const MakePayment = () => {
  
    const orderDetails = localStorage.getItem("payOrderDetail")
    const orderQty = localStorage.getItem('payOrderQty');
    const orderAmount = localStorage.getItem('payOrderAmount');
    console.log(orderQty)
    
    

  return (
    <div class='content'>
        
            <div class='navbarpay'>
                    <a href='/finance/pay/cardpay' class='naviconpay'>
                        <img class='iconimg' src='/payimg/BankCards.png' alt=''/>
                        <div class='icontext'>Credit/Debit Card</div>
                    </a> 
                    <a href='/finance/pay/chequepay' class='naviconpay'>
                        <img class='iconimg' src='/payimg/BouncedCheck.png' alt=''/>
                        <div class='icontext'>Cheques</div>
                    </a> 
                    <div class='naviconpay'>
                        <img class='iconimg' src='/payimg/Star.png' alt=''/>
                        <div class='icontext'>Star Points</div>
                    </div> 
                    <div class='naviconpay'>
                        <img class='iconimg' src='/payimg/Launch.png' alt=''/>
                        <div class='icontext'>Koko</div>
                    </div> 
                    <div class='naviconpay'>
                        <img class='iconimg' src='/payimg/MaxCDN.png' alt=''/>
                        <div class='icontext'>Mintpay</div>
                    </div> 
                    
            </div>

            

              
            <div class='layout'>
                    <div className='cards'>
                         <Outlet/>
                    </div>

                    <div class="paysummary">
                        <div id="ordersummarytxt">Order Summary</div>
                        <div class="ordersummaryfn">
                            <div>
                            <div>Description</div>
                            <div>{orderDetails}</div>
                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                            <div>
                            <div>Quantity</div>
                            <div>{orderQty}</div>
                            </div>

                            <div>
                            <div>Amount</div>
                            <div>{orderAmount}</div>
                            </div>
                        </div>

                    </div>
                    
            
            </div>
    </div>        
    
  )
}

export default MakePayment