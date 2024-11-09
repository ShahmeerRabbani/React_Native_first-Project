import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addCounter: (state, action) => {
            state.counter = ++state.counter
        },
        deleteCounter: (state, action) => {
            state.counter = --state.counter
        }

    }
})

export const {actions, reducer} = CounterSlice;

export const {addCounter, deleteCounter} = actions;

export default reducer;