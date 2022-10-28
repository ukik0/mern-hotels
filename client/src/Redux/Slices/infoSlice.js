import { createSlice} from '@reduxjs/toolkit';


const infoSlice = createSlice({
    name: 'info',
    initialState: {
        search: null,
    },
    reducers: {
        searchReducer: (state, action) => {
            state.search = action.payload
        }
    },

})

export const checkIsAuth = (state) => state?.info?.data
export const {searchReducer} = infoSlice.actions

export const infoReducer = infoSlice.reducer;