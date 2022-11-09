import axios from "axios";
import { allArtwork, detailsArtwork, addHearts } from "./slice";
const apiUrl = "http://localhost:4000";

export const getArtwork = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/artwork`);
    // console.log("getArtwork thunk: ", response.data);
    dispatch(allArtwork(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const artworkById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/artwork/${id}`);
      //   console.log("artwork by id thunk", response);
      dispatch(detailsArtwork(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const editHearts = (heart, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(`${apiUrl}/artwork/hearts/${id}`, {
        hearts: heart,
      });

      // console.log("thunk hearts: ", response.data);
      dispatch(addHearts(response.data.hearts));
    } catch (e) {
      console.log(e);
    }
  };
};
