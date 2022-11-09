import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artwork: null,
  details: null,
};

export const artworkSlice = createSlice({
  name: "artworkSlice",
  initialState,
  reducers: {
    allArtwork: (state, action) => {
      //   console.log("allArtwork slice", action);
      state.artwork = action.payload;
    },
    detailsArtwork: (state, action) => {
      //   console.log(action.payload);
      state.details = action.payload;
    },
  },
});
export const { allArtwork, detailsArtwork } = artworkSlice.actions;

export default artworkSlice.reducer;
