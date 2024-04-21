import React, { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import { Link } from 'react-router-dom';



const MakePayment = () => {
    const [cards, setcards] = useState([]);
    

    useEffect(() => {
        const fetchCards = async () => {
            try{
                const response = await axios.get('http://localhost:3500/payments',{
                    params: {useremail: 'sanjana.test@gmail.com'
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
    <div class='content'>
            <div class='navbarpay'>
                    <div class='naviconpay'>
                        <img class='iconimg' src='/payimg/BankCards.png' alt=''/>
                        <div class='icontext'>Credit/Debit Card</div>
                    </div> 
                    <div class='naviconpay'>
                        <img class='iconimg' src='/payimg/BouncedCheck.png' alt=''/>
                        <div class='icontext'>Cheques</div>
                    </div> 
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
            </div>
    </div>        
    
  )
}

export default MakePayment