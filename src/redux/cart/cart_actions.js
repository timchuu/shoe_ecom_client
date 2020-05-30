import { CartActionTypes } from './cart_types'


export const toggleHiddenCart = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
