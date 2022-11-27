import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './style.css';
import {CartState} from '../context/Context'

const SingleProduct = ({product})=>{
     const {state:{cart},dispatch} =CartState();
    return(
      <div className="product">
           <Card className="card">
               <Card.Img className="card_img" varient="top" src={product.product_image} alt={product.product_name} />
               <Card.Body>
                  <Card.Title className="product_info">{product.product_name}</Card.Title>
                  <Card.Subtitle>
                     <div><b>&#8377;{product.product_price}</b></div>
                     <p className="ml-4">Rating:{product.product_rating}</p>
                  </Card.Subtitle>
                  {
                  cart.some((cp)=>cp.product_id===product.product_id)?(
                    <Button className="btn btn-danger ml-2" onClick={()=>{
                        dispatch({type:'REMOVE_FROM_CART',payload:product})
                    }}>REMOVE FROM CART</Button>
                  ):(
                    <Button className="btn btn-dark" onClick={()=>{
                        dispatch({type:'ADD_TO_CART',payload:product})
                    }}>ADD TO CART</Button>
                  )
                }
               </Card.Body>
           </Card>
        </div>
    )
}
export default SingleProduct;