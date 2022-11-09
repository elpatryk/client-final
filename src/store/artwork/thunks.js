import axios from "axios";
import { allArtwork } from "./slice";
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
