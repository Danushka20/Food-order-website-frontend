import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';



const cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
        if(cartItems[item._id]>0)
        {
          return(
          <div>
            <div className="cart-items-title cart-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>*</p>
              
              
            

           



            </div>
            <hr />
            </div>

          )
        }

        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>

            <div className="cart-total-detail">
              <p>sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-detail"></div>
            <b>Total</b>
            <b>${getTotalCartAmount()+2}</b>
          </div>
          
            <button onClick={()=>navigate('/order')}>PROCCED TO CHECK OUT</button>
        </div> 
      
          <div className="cart-promocode">
      </div>
      
        <div>
          <p>gjdgjgjhgjhgjhgjkgiuiuyiytiya n rio jljlhhkjhkjhkgggjh</p>
          <div className="cart-promoco-input">
            <input type="text" placeholder='promo code' />
            <button>submit</button>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default cart
