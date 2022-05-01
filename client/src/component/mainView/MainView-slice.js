import {createSlice} from "@reduxjs/toolkit";

const mainViewSlice = createSlice({
    name: 'mainView',
    initialState: {
        links: [],
        products: [],

    },
    reducers: {
        savedLinks (state, action) {
            return {
                ...state,
                links: action.payload.data
            }
        },

        mainProducts (state, action) {
            return {
                ...state,
                products: [...action.payload.data],
            }
        },
    }
})

export const mainViewSliceActions = mainViewSlice.actions;
export default mainViewSlice.reducer;