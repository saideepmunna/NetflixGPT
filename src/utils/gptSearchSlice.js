import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchState: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchState = !state.gptSearchState;
    },
  },
});

export const { toggleGptSearch } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
