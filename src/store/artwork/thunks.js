import axios from "axios";
import { allArtwork, detailsArtwork, addHearts, addBid } from "./slice";
import { setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
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

export const postBid = (amount, email, artworkId) => {
  return async (dispatch, getState) => {
    const { token, profile } = getState().user;

    try {
      const response = await axios.post(
        `${apiUrl}/artwork/${profile.id}/bids`,
        {
          amount,
          email,
          artworkId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("thunk response", response);
      dispatch(addBid(response.data.bid));
      dispatch(showMessageWithTimeout("success", false, "New bid!", 1500));
    } catch (e) {
      console.log(e);
    }
  };
};

export const postArtwork = (title, imageUrl, minimumBid) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;

    try {
      const response = await axios.post(
        `${apiUrl}/artwork/auction`,
        {
          title,
          imageUrl,
          minimumBid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
    }
  };
};
