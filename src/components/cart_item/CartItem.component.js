import React from 'react'
import './cart_item.css'
const CartItem = ({ item }) => {
    return (
        <div className='cart-item'>
            <img src="https://loremflickr.com/320/240" alt='cart_pic' />
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='price'>
                    quanity x price
                </span>
            </div>
        </div>
    )
}

export default CartItem
