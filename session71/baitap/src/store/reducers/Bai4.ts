import { createSlice } from '@reduxjs/toolkit';
const initialList: any = {
  mode: 'list'
};

const displaySlice = createSlice({
  name: 'display',
  initialState: initialList,
  reducers: {
    toggleDisplayMode: (state) => {
      state.mode = state.mode === 'list' ? 'grid' : 'list';
    }
  }
});

export const { toggleDisplayMode } = displaySlice.actions;
export default displaySlice.reducer;
