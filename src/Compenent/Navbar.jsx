import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu]= useState('home');
    const{getTotalCartAmount}= useContext(StoreContext);


  return (
    <div className='navbar' >
       <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link> 
        <ul className='navbar-menu'>
         <Link to={'/'} onClick={()=>setMenu('home')}  className={menu==='home'?'navbar-menu-active':''}>home</Link>
         <a  href='#explore-menu'onClick={()=>setMenu("menu")}  className={menu==="menu"?'navbar-menu-active':""}>menu</a>
         <a  href ='#app-down'onClick={()=>setMenu("mobile")}  className={menu==="mobile"?'navbar-menu-active':""}>mobile</a>
         <a  href='#footer'onClick={()=>setMenu("contact us")}  className={menu==='conatct us'?'navbar-menu-active':""}>contact us</a>
          
        </ul>
           <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
              <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link> 
                <div className={getTotalCartAmount()===0?"":"navbar-search-icon-dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}> SIGN IN</button>
            </div>      
    </div>
  )
}

export default Navbar
