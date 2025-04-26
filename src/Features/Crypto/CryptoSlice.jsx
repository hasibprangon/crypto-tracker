import { createSlice } from '@reduxjs/toolkit';
import { generateMockData } from './mockData';

const initialState = {
  assets: generateMockData(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    }
  }
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
