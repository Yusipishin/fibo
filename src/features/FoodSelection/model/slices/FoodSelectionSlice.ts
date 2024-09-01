// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AllFoodProps } from '@/entities/Food';
// import { FoodSelectionSchema } from '../types/FoodSelectionSchema';

// const initialState: FoodSelectionSchema = {
//     food: {} as AllFoodProps,
//     isLoading: false,
// };

// export const FoodSelectionSlice = createSlice({
//     name: 'FoodSelection',
//     initialState,
//     reducers: {
//         addFood: (state, action: PayloadAction<AllFoodProps>) => {
//             state.food = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(foodSelection, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(, (state) => {
//                 state.isLoading = false;
//             })
//             .addCase(, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export const { actions: FoodSelectionActions } = FoodSelectionSlice;
// export const { reducer: FoodSelectionReducer } = FoodSelectionSlice;
