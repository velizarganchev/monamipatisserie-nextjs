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
            state = initialState;
        }
    }
})

export const {addProducts, toEmpty} = cartSlice.actions;
export default cartSlice.reducer;