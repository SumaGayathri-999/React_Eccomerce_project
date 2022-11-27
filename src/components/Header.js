import React from 'react';
import {Navbar,Container,FormControl,Dropdown,Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {CartState} from '../context/Context';
import { AiFillDelete} from 'react-icons/ai';



const Header = ()=>{
   const {state:{cart},dispatch} = CartState();
    return(
     
     <Navbar bg="dark" >
        <Container>
            <Navbar.Brand>
            <Link to="/">Family Shopping</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                    <FormControl style={{width:500}} placeholder="search shoes" />
            </Navbar.Text>
            <Dropdown drop="start">
               <Dropdown.Toggle variant="success" id="dropdown-basic">
                     <FaShoppingCart  />{cart.length}
               </Dropdown.Toggle>  
               <Dropdown.Menu>
                   {cart.length>0?(
                    <>
                    {cart.map((cp)=>
                        <>
                        <span className="cart_item" key="{cp.product_id}">
                            <img src={cp.product_image} className="cartItemImg" alt={cp.product_name}/>
                        
                        <div className="cardItemDetail">
                            <span>{cp.product_name}</span>
                            <span>&#8377;{cp.product_price}</span>
                        </div>
                        <AiFillDelete className="delete_icon" onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:cp})}/>
                        </span>
                        </>
                    )}
                    <Link to='/cart'>
                        <Button style={{width:"95%",margin:"0 10px"}} >
                            Go To Cart
                        </Button>
                    </Link>
                    </>
                   ):(
                     <span style={{padding:10}}>Cart is Empty</span>
                   )}

                  
               </Dropdown.Menu>
           </Dropdown>
    
        </Container>
    </Navbar>
  
    )
}

       
export default Header;