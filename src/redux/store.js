//Redux 
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

//rootReducer
import rootReducer from './rootReducer'

//middleware
const middlewares = [promiseMiddleware, logger]

export const store = createStore(rootReducer, applyMiddleware(thunk, ...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }