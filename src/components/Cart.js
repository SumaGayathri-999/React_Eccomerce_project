import React from 'react';
import {CartState} from '../context/Context';
import { AiFillDelete} from 'react-icons/ai'


const Cart = ()=>{
    const {state:{cart},dispatch}=CartState();
    return(
        <div>
                        <h1 className="text-center text-secondary my-4">YOUR CART</h1>
             {cart.map((cp)=>
                        <>
                        <span className="cart_item p-5" key="{cp.product_id}">
                            <img src={cp.product_image} className="cartItemImg cartProductImage" alt={cp.product_name}/>
                        
                        <div className="cardItemDetail">
                            <span>{cp.product_name}</span>
                            <span>>&#8377;{cp.product_price}</span>
                        </div>
                        <AiFillDelete className="delete_icon" onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:cp})}/>
                        </span>
                        </>
                    )}

        </div>
    )
}
export default Cart;