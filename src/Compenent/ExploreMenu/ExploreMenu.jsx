import React from 'react'
import'./ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>dajhkjdkshkjhkjhkjhkjhkjhkjhfuiyiyouoiuuujljlkjlkjlkklhhiuhyuoiuoiuuouiuoiujioiijukkhjki</p>
         <div className='explore-menu-list'>
          {menu_list.map((Item,index)=>{

            return(
               <div onClick={()=>setCategory(prev=>prev===Item.menu_name?"All":Item.menu_name)} key={index} className='explore-menu-list-item'>


                <img className={category===Item.menu_name?"active":""}    src={Item.menu_image} alt="" />
                <p>{Item.menu_name}</p>




               </div>

            )

          })}



         </div>
            
            <hr />
            
              
    </div>
  )
}

export default ExploreMenu
