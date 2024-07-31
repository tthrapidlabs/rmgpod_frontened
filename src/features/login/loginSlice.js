import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios'

const LOGIN_URL = '/flight/login'
const LOGOUT_URL = '/flight/logout'


const initialState = {

    authCheckAPI: {
        loading: false,
        error: ''
    },

    userLoginAPI: {
        loading: false,
        error: ''
    },

    logoutAPI: {
        loading: false,
        error: ''
    },

    loginInfo: {
        "logged": false,
        "username": null,
        "role": null,
        "error": null
    },
}

//Generated pending, fullfilled and rejected action types
export const authCheck = createAsyncThunk('login/checkAuth', () => {
    return axios(LOGIN_URL, { withCredentials: true })
        .then((response) => response.data)
})

export const userLogin = createAsyncThunk('login/userLogin', (action) => {
    return axios.post(LOGIN_URL, {
        username: action.username,
        password: action.password
    }, { withCredentials: true })
        .then((response) => {
            return response.data
        })
})

export const userLogout = createAsyncThunk('login/userLogout', (action) => {
    return axios(LOGOUT_URL, { withCredentials: true })
        .then((response) => {
            return response.data
        })
})

const userSlice = createSlice({
    name: 'login',
    initialState,

    extraReducers: (builder) => {

        //AUTH CHECK

        builder.addCase(authCheck.pending, (state) => {
            state.authCheckAPI.loading = true
        })

        builder.addCase(authCheck.fulfilled, (state, action) => {
            state.authCheckAPI.loading = false
            state.loginInfo = action.payload
            state.authCheckAPI.error = ''
        })

        builder.addCase(authCheck.rejected, (state, action) => {
            state.authCheckAPI.loading = false
            state.authCheckAPI.error = action.error.message
        })

        //POST LOGIN

        builder.addCase(userLogin.pending, (state) => {
            state.userLoginAPI.loading = true
            state.loginInfo.error = null
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userLoginAPI.loading = false
            state.loginInfo = action.payload
            state.userLoginAPI.error = ''
        })

        builder.addCase(userLogin.rejected, (state, action) => {
            state.userLoginAPI.loading = false
            state.userLoginAPI.error = action.error.message
        })

        //LOGOUT

        builder.addCase(userLogout.pending, (state) => {
            state.logoutAPI.loading = true
        })

        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.logoutAPI.loading = false
            state.loginInfo = {
                "logged": false,
                "username": null,
                "role": null,
                "error": null
            }
            state.userLoginAPI.error = ''
        })

        builder.addCase(userLogout.rejected, (state, action) => {
            state.logoutAPI.loading = false
            state.userLoginAPI.error = action.error.message
        })

    }

})

export default userSlice.reducer