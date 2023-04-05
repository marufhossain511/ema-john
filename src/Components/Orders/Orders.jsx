import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const savedCart=useLoaderData()

    const [cart,setCart]=useState(savedCart)

    const handleRemoveFromCart=(id)=>{
        console.log(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product=><ReviewItem 
                    handleRemoveFromCart={handleRemoveFromCart}
                    key={product.id} 
                    product={product}
                    ></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;