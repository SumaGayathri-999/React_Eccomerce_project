import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import './style.css';

const Home = ()=>{
    const {state:{ products}} = CartState();
    return(
        <div>
            <h1 className="text-center text-secondary my-4">PRODUCTS</h1>
            <div className='productContainer'>
                {products.map((item)=>{return <SingleProduct product={item} key={item.product_id}/>})}
            </div>
        </div>

       
       
    )
}
export default Home;