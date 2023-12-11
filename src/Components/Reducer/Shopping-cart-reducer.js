import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        list: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const {id, name, price, image} = action.payload
            const existingProduct = state.list.find(product => product.id === id)

            if (existingProduct){
                existingProduct.quantity += 1;
            } else {
                state.list.push({id, name, price, image, quantity: 1})
            }
        },
        deleteProduct: (state, action) => {
            return {...state, list: state.list.filter(product => product.id !== action.payload)}
        },
        updateCountProduct: (state, action) => {
            const {id, quantity} = action.payload;
            const product = state.list.find(product => product.id === id)

            if (product){
                product.quantity = quantity
            }
        },
        deleteAllProducts: (state, action) => {
            return{ ...state, list: []};
        },
    }
})

export const { addProduct, deleteProduct, updateCountProduct, deleteAllProducts } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;