import React, { useContext } from 'react'
import'./place.css'
import { StoreContext } from '../../Context/StoreContext'


const place = () => {
  const{getTotalCartAmount}= useContext(StoreContext)

  return (
    <div>
      <form className="place-order">
      <div className="place-order-left">
        <p className='place-order-left-title'>Delivery information</p>
        <div className="place-order-left-multi-field">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Second name'/>
        </div>
         <input type="E mail"placeholder='Email address' />
         <input type="text" placeholder='street'/>
         <div className="place-order-left-multi-field">
          <input type="text"placeholder='City' />
          <input type="text" placeholder='State'/>
         </div>
         <div className="place-order-left-multi-field">
           <input type="text"placeholder='Zip code' />
           <input type="text"placeholder='Country' />
         </div>
         <input type="text"placeholder='phone' />
      </div>
        <div className="place-order-right">
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
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          
            <button>PROCCED TO CHECK OUT</button>
        </div> 

        </div>

      </form>
      
    </div>
  )
}

export default place
