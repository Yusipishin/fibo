import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodCustomizeSchema } from '../types/FoodCustomizeSchema';

const initialState: FoodCustomizeSchema = {};

export const FoodCustomizeSlice = createSlice({
    name: 'FoodCustomize',
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

export const { actions: FoodCustomizeActions } = FoodCustomizeSlice;
export const { reducer: FoodCustomizeReducer } = FoodCustomizeSlice;
