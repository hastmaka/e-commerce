import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        tempData: ''
    },
    reducers: {
        setTemData(state, action) {
            state.tempData = [...action.payload]
        }
    }
})

export const modalSliceActions = modalSlice.actions;
export default modalSlice.reducer;