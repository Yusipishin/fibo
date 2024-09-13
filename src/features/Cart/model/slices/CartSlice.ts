import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSchema } from '../types/CartSchema';

const initialState: CartSchema = {};

export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: CartActions } = CartSlice;
export const { reducer: CartReducer } = CartSlice;
