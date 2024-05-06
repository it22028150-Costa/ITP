import React from 'react'
import { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import { Link, Outlet } from 'react-router-dom';
import './CardPay.css'





const CardPay = () => {
    console.log(window.currentUser)
    const [cards, setcards] = useState([]);
    const [selectedCard, setSelectedCard] = useState("");
    const [orderId, setOrderId] = useState(null)
    const [cvv,setcvv] = useState([])
    
    
    const handleCardSelection = (cardId) => {
        setSelectedCard(cardId);
        console.log(selectedCard)
        
        
    };

    useEffect(() => {
        console.log(localStorage.getItem("payOrder"));
        
        
        const fetchCards = async () => {
            try{
                const response = await axios.get('http://localhost:3500/payments',{
                    params: {useremail: localStorage.getItem('currentUser')
                    }
                });
                setcards(response.data);
                
            }catch(err){
                console.error(err);
            }
        };
        fetchCards(); 

    },[]);

    const handlePayment = async () => {
        if (!selectedCard ) {
            alert('Please select a card');
            return;
        }
        if(cvv.length !== 3 || !cvv) {
            console.log(cvv)
            alert('Please enter a CVV')
            return;
        }

        try {
            const paymentMethod = "Card"
            const _id = localStorage.getItem('payOrderId')
            console.log(selectedCard,cvv)
            const update = {_id,selectedCard,paymentMethod,cvv}
            await axios.patch('http://localhost:3500/payorders', update)
            .then(response=>{
                alert(response.data.message)
            })
            
        } catch (err) {
            console.error(err);
            alert(err.response.data.message)
            alert('Payment failed');
        }
    };


  return (
        <>
            <div class="cards">
                {cards.map(cards =>(
                    <div key={cards._id} className={`card ${selectedCard === cards._id ? 'selected' : ''}`} onClick={() => handleCardSelection(cards._id)}> 
                        {cards.merchant === "Visa" ? (
                            <img class="merchimg" src='/payimg/Visa.png' alt=''/>
                        ) : cards.merchant === "Mastercard" ? (
                            <img class="merchimg" src='/payimg/MastercardLogo.png' alt=''/>
                        ) : (
                            <img class="merchimg" src='/payimg/Visa.png' alt=''/>
                        )}
                        
                        <div class="cardinfo">
                            <div class ="carddetail" id='cardno'>{cards.cardno}</div>
                            <div class ="carddetail" id= 'cardname'>{cards.nameoncard}</div>
                            <input type='number' onChange={(e)=> setcvv(e.target.value)} className ={`carddetail ${selectedCard === cards._id ? '' : 'cvv'}`}  placeholder='Enter CVV'/>
                        </div>  
                           

                    </div>
                ))}
                    
                    
                <Link class='addcrdlink' to="/finance/card">Add/Remove Cards </Link>

                <div className="paysummary">
                <button className="paybutton" onClick={handlePayment}>Pay</button>
                </div>
                    
            </div>

        </>
  )
}

export default CardPay