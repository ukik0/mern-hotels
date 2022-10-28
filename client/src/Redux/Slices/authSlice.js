import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "../../utils/axios";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async ({username, password}) => {
    const {data} = await axios.post('/auth/login', {username, password})

    if (data) {
        localStorage.setItem('user', JSON.stringify(data))
    }
    return data
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
    },
    reducers: {
        logout: (state) => {
            state.user = null
            state.loading = true
        }
    },
    extraReducers: {
        //fetchLogin
        [fetchLogin.pending]: (state) => {
            state.user = null
        }, [fetchLogin.fulfilled]: (state, action) => {
            state.user = action.payload
        }, [fetchLogin.rejected]: (state) => {
            state.user = null
        },
    }

})

export const checkIsAuth = (state) => state?.auth?.user
export const {logout} = AuthSlice.actions

export const AuthReducer = AuthSlice.reducer;