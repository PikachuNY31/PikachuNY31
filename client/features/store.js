import { configureStore } from '@reduxjs/toolkit';
import cardSliceReducer from './slices/cardSlice';

export const store = configureStore({
    reducer: {
        cards: cardSliceReducer,
    },
});