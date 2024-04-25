import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios";
import './MakePayment.css';
import './ConfigureCards.css'

const CreateOrder = () => {

    const [order, setorder] = useState([]);
    const useremail = localStorage.getItem('currentUser')
    const [orderDetails,setOrderDetails] = useState("");
    const [orderQty,setOrderQty] =useState();
    const [orderAmount,setOrderAmount] = useState();
    const [orderStatus,setOrderStatus] = useState(false); 
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const order = {useremail,orderDetails,orderQty,orderAmount,orderStatus};
            console.log(order);
            await axios.post('http://localhost:3500/payorders',order);
            console.log('Card created form frontend');
            window.location.reload(true);

        }catch (err){
            console.error(err);
        }
    }
  return (
    <div class="paysummary">
                        <div class="createcard">
                            Create Card
                        </div>

                        <form class="cardform" onSubmit={handleSubmit}>
                            <div class="formitem">
                                <label class="lbl">Order Details:</label>
                                <input class="input" type="text" placeholder='NS DE COSTA' value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} required/>
                            </div>
                            <div class="formitem">
                                <label class="lbl">Order Quantity:</label>
                                <input class="input" type="number" value={orderQty} onChange={(e) => setOrderQty(e.target.value)} required/>
                            </div>

                            <div class="formitem">
                                <label class="lbl">Order Amount:</label>
                                <input class="input" type="number" value={orderAmount} onChange={(e) => setOrderAmount(e.target.value)} required/>
                            </div>

                            
                                
                            

                            <button class="addbtn" type='submit'>Make Order</button>
                        
                        </form>
                        </div>
  )
}

export default CreateOrder