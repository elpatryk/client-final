import axios from "axios";
import {
  allArtwork,
  detailsArtwork,
  addHearts,
  addBid,
  postAuction,
  deleteArtwork,
} from "./slice";
import { appDoneLoading, appLoading, setMessage } from "../appState/slice";
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
    dispatch(appLoading());
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
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e);
    }
  };
};

export const postArtwork = (title, imageUrl, minimumBid) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(appLoading());
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
      dispatch(postAuction(response.data.artwork));
      dispatch(showMessageWithTimeout("success", false, "New artwork!", 1500));

      dispatch(appDoneLoading());
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

export const deleteAuction = (artworkId) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(appLoading());
    try {
      const response = await axios.delete(
        `${apiUrl}/artwork/auction/${artworkId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      dispatch(deleteArtwork(response.data));
      dispatch(showMessageWithTimeout("danger", true, " artwork deleted"));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
