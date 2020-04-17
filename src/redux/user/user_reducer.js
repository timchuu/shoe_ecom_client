import { userActionTypes } from './user_types'

//int state
const initState = {
    isAuthenticated: null,
    token: localStorage.getItem('token'),
    isFetching: false,
    error: null,
    user: null,

}

//reducer
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userActionTypes.USER_LOADING:
            return { ...state, isFetching: true }

        case userActionTypes.USER_LOADED:
            return { ...state, isAuthenticated: true, isFetching: true, user: action.payload }

        case userActionTypes.AUTH_START:
        case userActionTypes.REGISTER_USER_START:
            return { ...state, error: null, isFetching: true }


        case userActionTypes.REGISTER_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return { ...state, ...action.payload, isAuthenticated: true, isFetching: false }

        case userActionTypes.LOGIN_START:
            return { ...state, error: null, isFetching: true }

        case userActionTypes.AUTH_SUCCESS:

            return { ...state, token: action.payload, error: null, isFetching: false, isAuthenticated: true }

        case userActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return { ...state, ...action.payload, isFetching: false, isAuthenticated: true }



        case userActionTypes.AUTH_FAIL:
        case userActionTypes.REGISTER_USER_FAIL:
        case userActionTypes.LOGIN_FAIL:
        case userActionTypes.LOGOUT_SUCCESS:
        case userActionTypes.LOGOUT_FAIL:
            localStorage.removeItem('token')
            return { ...state, token: null, user: null, isAuthenticated: false, isFetching: false, error: action.payload }



        default:
            return state
    }


}

export default userReducer