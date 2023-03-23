import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralState, Languages, NewsDisplay } from './generalTypes';

const initialState: GeneralState = {
  newsDisplayStyle: NewsDisplay.list,
  language: Languages.PL,
};

/**
 * General slice. Handles general app data in store.
 */
export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setDisplayStyle: (state, action: PayloadAction<NewsDisplay>) => {
      state.newsDisplayStyle = action.payload;
    },

    setLanguage: (state, action: PayloadAction<Languages>) => {
      state.language = action.payload;
    },
  },
});

export const { setDisplayStyle, setLanguage } = generalSlice.actions;

export default generalSlice.reducer;
