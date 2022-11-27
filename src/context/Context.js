import React from 'react';
import {  useEffect, useReducer, useContext } from 'react';
import { createContext } from 'react'
import axios from 'axios';
import {cartReducer}  from './Reducers';

const Cart = createContext();
const Context = ({children})=>{

    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>{
        
        const products_array=res.data.slice(0,12).map((item)=>({
            product_id:item.id,
            product_name:item.title,
            product_category:item.category,
            product_image:item.image,
            product_price:item.price,
            product_rating:item.rating.rate
        }))
    if(products_array){
        dispatch({type:"REPLACE_STATE",payload:{products:products_array,cart:[]}})
    }
        })       
        .catch((e)=>{console.log(e)})
    },[]);
    const [state,dispatch] = useReducer(cartReducer,{
        products:[],
        cart:[]
    })
    return(

       <Cart.Provider value={{state, dispatch}}>
        {children}
       </Cart.Provider>
      
    )
}
export default Context;
export const CartState = ()=>{
    return useContext(Cart)
}