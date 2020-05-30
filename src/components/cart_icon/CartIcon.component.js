import React from 'react'
import { connect } from 'react-redux'
import { toggleHiddenCart } from '../../redux/cart/cart_actions'
import Icon from '@material-ui/core/Icon'


const CartIcon = ({ toggleHiddenCart }) => {

    return (
        <div style={{ marginTop: '15px', marginRight: '5px', cursor: 'pointer' }} onClick={toggleHiddenCart} >
            <Icon color='secondary' style={{ fontSize: 25 }} > shopping_cart</Icon>
            <span className='item-count'></span>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})

export default connect(null, mapDispatchToProps)(CartIcon)
