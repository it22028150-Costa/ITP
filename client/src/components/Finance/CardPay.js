import React from 'react'
import { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import { Link, Outlet } from 'react-router-dom';





const CardPay = () => {
    console.log(window.currentUser)
    const [cards, setcards] = useState([]);
    

    useEffect(() => {
        const fetchCards = async () => {
            try{
                const response = await axios.get('http://localhost:3500/payments',{
                    params: {useremail: localStorage.getItem('currentUser')
                    }
                });
                setcards(response.data);
                console.log(cards)
            }catch(err){
                console.error(err);
            }
        };
        fetchCards(); 

    },[]);


  return (
        <>
            <div class="cards">
                {cards.map(cards =>(
                    <div key={cards._id} class="card"> 
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
                    
            </div>

            <div class="paysummary">
                <div>Test</div>
            </div>
        </>
  )
}

export default CardPay