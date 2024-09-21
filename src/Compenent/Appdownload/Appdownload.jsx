import React from 'react'
import'./Appdownload.css'
import { assets } from '../../assets/assets'

function Appdownload() {
  return (
    <div className='app-down' id='app-down'>
        <p>For  better expirince download <br /> Tomato app</p>
        <div className="app-down-platfoarm">

            <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
