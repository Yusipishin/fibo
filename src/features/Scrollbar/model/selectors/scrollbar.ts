import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const getScroll = (state: StateSchema) => state.scrollbar.scroll;
export const getScrollByPath = createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
