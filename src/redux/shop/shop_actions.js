import { ShopActionTypes } from './shop_types'
import axios from 'axios'
import { PRODUCT_URL, CATEGORY_URL, PRODUCT_CATEGORY_URL } from '../../utils/URL_CONSTANTS/product_server'




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

// export const fetchShopItems = () => {
//     return dispatch => {
//         //dispatching to reducer fetch starting
//         dispatch(fetchShopItemStart())
//         //call to shop api
//         const requestMap = axios.get(`${PRODUCT_URL}`)
//             .then(response => response.data)
//             .catch(error => console.log(error))

//         dispatch(fetchShopItemSuccess(requestMap))


//     }
// }
export const fetchShopItems = (filters = [], previousState = []) => {

    let requestMap = ''
    return dispatch => {
        //dispatching to reducer fetch starting
        dispatch(fetchShopItemStart())
        if (filters.length > 0) {
            requestMap = axios.get(`http://localhost:8000/products/product/?by_category=${filters.join(',')}`)
                .then(response => {

                    let newState = [
                        ...previousState,
                        ...response.data
                    ]

                    return {
                        shopItems: newState

                    }

                })

                .catch(error => console.log(error))


        } else {
            requestMap = axios.get(`http://localhost:8000/products/product/`)
                .then(response => {

                    let newState = [
                        ...previousState,
                        ...response.data
                    ]

                    return {
                        shopItems: newState

                    }


                })


        }



        dispatch(fetchShopItemSuccess(requestMap))


    }

}

export const getBrands = () => {
    const request = axios.get(`${CATEGORY_URL}`)
        .then(response => response.data)

    return {
        type: ShopActionTypes.GET_BRANDS,
        payload: request
    }
}
// export const getBrands = (previousState = []) => {
//     const request = axios.get(`${CATEGORY_URL}`)
//         .then(response => {

//         })

//     return {
//         type: ShopActionTypes.GET_BRANDS,
//         payload: request
//     }
// }


// export const getSelectBrands = (filters = [], previousState = []) => {



//     const request = axios.get(`${PRODUCT_CATEGORY_URL}/?ids=${filters.join(',')}`)
//         .then(response => {
//             let newState = [
//                 ...previousState,
//                 ...response.data
//             ]
//             return {
//                 brandData: newState
//             }
//         })

//     return {
//         type: ShopActionTypes.GET_SELECT_BRANDS,
//         payload: request
//     }
// }



