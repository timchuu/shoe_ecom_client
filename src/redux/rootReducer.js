//Redux import
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//reducers
import userReducer from './user/user_reducer'
import cartReducer from './cart/cart_reducer'
import shopReducer from './shop/shop_reducer'


//persist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)