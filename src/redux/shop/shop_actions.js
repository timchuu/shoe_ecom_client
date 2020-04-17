import { ShopActionTypes } from './shop_types'
import axios from 'axios'



// const SHOP_ITEM_URL = 'http://localhost:3001/api/shop_item/'
const TEMP_SHOP_ITEM_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:3004/items'

export const fetchShopItemStart = () => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_START
})

export const fetchShopItemSuccess = itemMap => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
    payload: itemMap
})


export const fetchShopItemFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_SHOP_ITEMS_FAILURE,
    payload: errorMessage
})

export const fetchShopItems = () => {
    return dispatch => {
        //dispatching to reducer fetch starting
        dispatch(fetchShopItemStart())
        //call to shop api
        const requestMap = axios.get(`${TEMP_SHOP_ITEM_URL}`)
            .then(response => response.data)
            .catch(error => console.log(error))

        dispatch(fetchShopItemSuccess(requestMap))


    }
}



