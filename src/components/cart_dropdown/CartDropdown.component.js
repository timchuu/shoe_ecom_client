import React from 'react'
import Button from '@material-ui/core/Button'
import CartItem from '../cart_item/CartItem.component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart_selectors'
import { toggleHiddenCart } from '../../redux/cart/cart_actions'
import './cart_dropdown.css'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : <span>Your cart is empty</span>}

            </div>
            <Button variant="outlined" color="secondary" onClick={() => { history.push('/checkout'); dispatch(toggleHiddenCart()) }}>
                Checkout
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

