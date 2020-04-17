import React from 'react'
import CartItem from '../cart_item/CartItem.component'
import './cart_dropdown.css'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CartItem />
            </div>
        </div>
    )
}

export default CartDropdown

