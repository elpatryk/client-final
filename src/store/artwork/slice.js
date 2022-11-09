import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artwork: null,
};

export const artworkSlice = createSlice({
  name: "artworkSlice",
  initialState,
  reducers: {
    allArtwork: (state, action) => {
      //   console.log("allArtwork slice", action);
      state.artwork = action.payload;
    },
  },
});
export const { allArtwork } = artworkSlice.actions;

export default artworkSlice.reducer;
