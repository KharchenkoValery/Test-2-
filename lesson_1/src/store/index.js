import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import registerReducer from "./RegisterSlice"

export const store = configureStore({
    reducer: {
        todoReducer,
        registerReducer
    },
})