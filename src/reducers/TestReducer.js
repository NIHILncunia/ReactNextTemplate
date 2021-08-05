import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  word: 'JavaScript',
};

export const TestReducer = createSlice({
  name: 'test',
  initialState,
  reducers: {
    ChangeWord: (state) => {
      if (state.word === 'JavaScript') {
        state.word = 'TypeScript';
      } else {
        state.word = 'JavaScript';
      }
    },
  },
});

export const { ChangeWord, } = TestReducer.actions;

export default TestReducer.reducer;
