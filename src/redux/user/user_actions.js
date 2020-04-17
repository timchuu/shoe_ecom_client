import axios from 'axios'
import { userActionTypes } from './user_types'


const USER_SERVER = 'http://127.0.0.1:8000/api/auth'


//Check user credentials
export const loadUser = () => (dispatch, getState) => {
    //Load user 
    dispatch({ type: userActionTypes.USER_LOADING })
    //http request to server for authentication
    axios.get(`${USER_SERVER}/user`)
        .then(response => {
            dispatch({
                type: userActionTypes.USER_LOADED,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: userActionTypes.AUTH_FAIL,
                error: error
            })
        })
}

export function authSuccess(token) {
    localStorage.setItem('token', token);
    return {
        type: userActionTypes.AUTH_SUCCESS,
        payload: token
    }
}

//Login action helper functions
// export function loginSuccess(resData) {
//     return {
//         type: userActionTypes.LOGIN_SUCCESS,
//         payload: resData
//     }
// }




export function authFail(error) {
    return {
        type: userActionTypes.AUTH_FAIL,
        payload: error
    }
}


export const tokenConfig = getState => {
    //get token from state
    const token = getState().user.token
    console.log(token)
    //headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `token ${token}`
    }
    return config
}

// export const authSuccess = (token) => {
//     localStorage.setItem(token)
//     return {
//         type: userActionTypes.AUTH_SUCCESS,
//         payload: token
//     }
// }
export const authCheckState = () => {
    return dispatch => {
        //check for token
        let token = localStorage.getItem('token')
        if (!token || token === undefined) {
            dispatch({ type: userActionTypes.AUTH_FAIL })
        } else {
            dispatch(authSuccess(token))
        }

    }
}


//register user action
export function registerUser(dataToSubmit) {
    return dispatch => {
        dispatch({ type: userActionTypes.REGISTER_USER_START })
        return axios.post(`${USER_SERVER}/register`, dataToSubmit)
            .then((response) => dispatch({ type: userActionTypes.REGISTER_USER_SUCCESS, payload: response.data }))
            .catch(error => dispatch({ type: userActionTypes.REGISTER_USER_FAIL, payload: error }))

    }
}

//login user action
export const loginUser = (dataToSubmit) => {
    return dispatch => {
        dispatch({ type: userActionTypes.LOGIN_START })
        return axios.post(`${USER_SERVER}/login`, dataToSubmit)
            .then((response) => dispatch({ type: userActionTypes.LOGIN_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: userActionTypes.LOGIN_FAIL, payload: error }))
    }

}

//logout user
export const logout = () => (dispatch, getState) => {
    return axios.post(`${USER_SERVER}/logout`, null, tokenConfig(getState))
        .then((response) => dispatch({ type: userActionTypes.LOGOUT_SUCCESS }))
        .catch((error) => dispatch({ type: userActionTypes.LOGOUT_FAIL, payload: error }))

}





