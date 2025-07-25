import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";

export const store = configureStore({
    reducer:{
        mycounter: CounterSlice.reducer
    }
})