import {configureStore} from '@reduxjs/toolkit'
import {infoReducer} from "./Slices/infoSlice";
import {AuthReducer} from "./Slices/authSlice";

const store = configureStore({
    reducer: {
        info: infoReducer,
        auth: AuthReducer
    }
})

export default store