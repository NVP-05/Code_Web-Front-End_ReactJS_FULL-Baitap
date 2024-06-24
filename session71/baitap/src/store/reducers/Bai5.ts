// src/features/menu/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isVisible: true
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isVisible = !state.isVisible;
    }
  }
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
