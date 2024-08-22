import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollbarSchema } from '../types/ScrollbarSchema';

const initialState: ScrollbarSchema = {
    scroll: {},
};

export const scrollbarSlice = createSlice({
    name: 'scrollbar',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollbarActions } = scrollbarSlice;
export const { reducer: scrollbarReducer } = scrollbarSlice;
