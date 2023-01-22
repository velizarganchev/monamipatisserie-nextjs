import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalSum: 0,
        cQuantity: 0
    },
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
            state.cQuantity += 1;
            state.totalSum += action.payload.price * action.payload.quantity;
        },
        toEmpty: (state) => {
            state.products = [];
            state.cQuantity = 0;
            state.totalSum = 0;
        },
        removeProduct: (state, action) => {
            const leftProducts = state.products.filter((product) => product._id !== action.payload._id);
            state.products = leftProducts;
            state.cQuantity -= 1;
            state.totalSum -= action.payload.price * action.payload.quantity;
        }
    }
})

export const { removeProduct, addProducts, toEmpty } = cartSlice.actions;
export default cartSlice.reducer;