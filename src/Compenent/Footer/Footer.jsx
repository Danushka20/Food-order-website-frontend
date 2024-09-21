import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>ghjgjhghjguyhurahjhhjhhjggghhbjhnghjgjhgjhghgjhgjhyuuytguytuytuytyugjhghgjhghjghjnbhjghjg</p>
              <div className="footer-soicial-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src= {assets.twitter_icon} alt="" />


              </div>



            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policie</li>
                </ul>


            </div>
             <div className="footer-content-right">
                <h2>GET TOUCH</h2>
                <ul>
                    <li>0765664989</li>
                    <li>conatck@gmail.com</li>
                </ul>



             </div>

        </div>
             <hr />
            <p className="footer-copyright">       p.footer@copyright</p>    
    </div>
  )
}

export default Footer
