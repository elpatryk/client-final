import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { artworkById } from "../store/artwork/thunks";
import { selectById } from "../store/artwork/selectors";
import { Title } from "../styled";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(artworkById(id));
  }, [dispatch, id]);
  const artwork = useSelector(selectById);

  return (
    <div>
      {!artwork ? "Loading..." : <Title>{artwork.title}</Title>}
      <div>
        {!artwork ? (
          "Loading"
        ) : (
          <div>
            {" "}
            <img src={artwork.imageUrl} alt="artwork img" width="500px" />{" "}
            Hearts: {artwork.hearts}
            {artwork.bids.map((bid) => {
              return (
                <div key={bid.id}>
                  {bid.email} - {bid.amount}€
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
