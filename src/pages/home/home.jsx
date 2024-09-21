import React, { useState } from 'react'
import './home.css'
import Header from '../../Compenent/header/header.jsx'
import ExploreMenu from '../../Compenent/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../Compenent/FoodDisplay/FoodDisplay.jsx'
import Appdownload from '../../Compenent/Appdownload/Appdownload.jsx'


export default function Home() {


  const[category,setCategory]= useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category ={category}/>
      <Appdownload/>
      
    </div>
  )
}
