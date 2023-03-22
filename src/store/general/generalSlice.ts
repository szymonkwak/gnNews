import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralState, NewsDisplayStyle } from './generalTypes';

const initialState: GeneralState = {
  newsDisplayStyle: NewsDisplayStyle.list,
  language: 'pl',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setDisplayStyle: (state, action: PayloadAction<NewsDisplayStyle>) => {
      state.newsDisplayStyle = action.payload;
    },
  },
});

export const { setDisplayStyle } = generalSlice.actions;

export default generalSlice.reducer;
