import { createSlice } from '@reduxjs/toolkit';

const randomNumber:object = [];
const numbersSlice = createSlice({
  name: 'randomNumber',
  initialState: randomNumber,
  reducers: {
    generateRandomNumbers: (state) => {
      return Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
    }
  }
});

export const { generateRandomNumbers } = numbersSlice.actions;
export default numbersSlice.reducer;