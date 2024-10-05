import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./reducer";
import todoRedux from "./todoRedux";

const store = configureStore({
    reducer: {
        tripReducer,
        "todo": todoRedux
    },
    devTools: true,
});

export default store;
