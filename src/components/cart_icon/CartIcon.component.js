import React from 'react'
import { connect } from 'react-redux'
import { toggleHiddenCart } from '../../redux/cart/cart_actions'
import './cart_icon.css'
import { ReactComponent as ShoppingIcon } from '../../shopping-cart.svg'


const CartIcon = ({ toggleHiddenCart }) => {

    return (
        <div className='cart-icon' onClick={toggleHiddenCart} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'></span>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})

export default connect(null, mapDispatchToProps)(CartIcon)
