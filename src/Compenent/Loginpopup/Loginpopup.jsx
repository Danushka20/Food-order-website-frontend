import React, { useState } from 'react'
import './loginpop.css'
import { assets } from '../../assets/assets'




const Loginpopup = ({setShowLogin}) => {

    const [currState,setCurrState] =useState("Sign-up")




  return (
    <div className='login-popup'>
      <form className="loging-popup-contain">
       <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=> setShowLogin(false)}  src={assets.cross_icon} alt="" />


       </div>
       <div className="login-pop-inputs">
        
       {currState==="Login"?<></>:<input type="text" placeholder='yourname' required/>}
        <input type="email" placeholder='email' required />
        <input type="password" placeholder='password' required />
       

       </div>
       <button>{currState==="Sign up"?"create  account":"Login"}</button>
       <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>ghdjhgjuhguyjtguhkjhjkljmndsa,mnfvskld  j jlojao fshk  </p>

       </div>
       {currState==="Login"
          ?<p>Create new account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
          :<p>Allready have a account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
       
         }
       
       
              
      </form>

       
      
    </div>
  )
}

export default Loginpopup

