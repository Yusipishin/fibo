import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authByUsername } from '../services/authByUsername/authByUsername';
import { AuthSchema } from '../types/AuthSchema';

const initialState: AuthSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
