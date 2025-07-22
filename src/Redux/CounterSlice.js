import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const CounterSlice = createSlice({
    // name
    name:"counter",

    // initialstate
    initialState,

    // reducers
    reducers: {
        Increment: (state) => {
            state.count += 1;
        },
        
        Decrement: (state) => {
            state.count -= 1;
        },
    },
    
});

export const { Increment, Decrement } = CounterSlice.actions;