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
    addHearts: (state, action) => {
      // console.log("slice ", action);
      state.details.hearts = action.payload;
    },
    addBid: (state, action) => {
      state.details.bids = [...state.details.bids, action.payload];
    },
    postAuction: (state, action) => {
      state.artwork = [...state.artwork, action.payload];
      // console.log(action.payload);
    },
    deleteArtwork: (state, action) => {
      const artworkId = action.payload;
      state.artwork = state.artwork.filter(
        (artwork) => artwork.id !== artworkId
      );
    },
  },
});
export const {
  allArtwork,
  detailsArtwork,
  addHearts,
  addBid,
  deleteArtwork,
  postAuction,
} = artworkSlice.actions;

export default artworkSlice.reducer;
