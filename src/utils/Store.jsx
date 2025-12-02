import { configureStore } from "@reduxjs/toolkit";
import appReducer from "..utils/AppSlice";

const store = configureStore ({
    reducer:{
        app:appReducer,

    },
});
export default store;
