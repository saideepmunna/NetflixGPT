import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchState: false,
    gptMovies:null,
    tmdbApiMovies: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchState = !state.gptSearchState;
    },
    addGptMovies:(state, action)=>{
      const {gptApiResults, tmdbFetchApiResults }=action.payload;
      state.gptMovies= gptApiResults;
      state.tmdbApiMovies = tmdbFetchApiResults;
    }
  },
});

export const { toggleGptSearch, addGptMovies } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
