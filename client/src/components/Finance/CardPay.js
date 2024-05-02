import React from 'react'
import { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import { Link, Outlet } from 'react-router-dom';





const CardPay = () => {
    console.log(window.currentUser)
    const [cards, setcards] = useState([]);
    const [selectedCard, setSelectedCard] = useState("");
    const [orderId, setOrderId] = useState(null)
    
    const handleCardSelection = (cardId) => {
        setSelectedCard(cardId);
        
    };

    useEffect(() => {
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
        if (!selectedCard) {
            alert('Please select a card');
            return;
        }

        try {
            const paymentMethod = "Card"
            const _id = localStorage.getItem('payOrder')
            const update = {_id,selectedCard,paymentMethod}
            await axios.patch('http://localhost:3500/payorders', update);
            alert('Payment successful');
        } catch (err) {
            console.error(err);
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
                        </div>     

                    </div>
                ))}
                    
                    
                <Link class='addcrdlink' to="/finance/card">Add/Remove Cards </Link>

                <div className="paysummary">
                <button className="paybutton" onClick={handlePayment}>Pay</button>
                </div>
                    
            </div>

            <div class="paysummary">
                <div>Test</div>
            </div>
        </>
  )
}

export default CardPay