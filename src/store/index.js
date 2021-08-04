import { configureStore } from '@reduxjs/toolkit';
import TestReducer from '@/reducers/TestReducer';

export const store = configureStore({
  reducer: {
    test: TestReducer,
  },
});
