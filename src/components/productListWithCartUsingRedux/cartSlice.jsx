import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const findItemIndex = (state, id) => state.cartItems.findIndex(item => item.id === id);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const index = findItemIndex(state, product.id);

            if(index !== -1){
                state.cartItems[index].qunatity += 1;
            }else {
                state.cartItems.push({ ...product, qunatity: 1});
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        updateQuantity:(state, action) => {
            const {id, quantity} = action.payload;
            const index = findItemIndex(state, id);
            if(index!== -1){
                state.cartItems[index].quantity = quantity;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        }
    }
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;