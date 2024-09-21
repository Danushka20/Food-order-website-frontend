import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext= createContext(null)

const StoreContextProvider =(props) =>{
    const[cartItems,setCartitems] = useState({});
      
    const addToCart =(itemid)=>{
        if(!cartItems[itemid]){
            setCartitems((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removeFromCart =(itemid)=>{
        setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

   const getTotalCartAmount=()=>{
        let totalAmount =0;
        for (const item in cartItems) {

            if (cartItems[item]>0) {
              let itemInfo =food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price*cartItems[item];  
            }
            
        }
        return totalAmount;
   }


    const contextValue={
        food_list,
        cartItems,
        setCartitems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }


        

    
    return(
        <StoreContext.Provider value={contextValue}>

            {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider;