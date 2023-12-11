import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./Shopping-cart-reducer";

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    },
});

export default store;