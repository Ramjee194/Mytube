import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";


const store = configureStore ({
    reducer:{
        app:appReducer,

    },
});
export default store;
