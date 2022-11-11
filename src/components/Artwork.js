import React from "react";
import { Button, Title } from "../styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteAuction, getArtwork } from "../store/artwork/thunks";
import { selectArtwork } from "../store/artwork/selectors";
import { selectUser } from "../store/user/selectors";

export default function Artwork() {
  const dispatch = useDispatch();
  const artworks = useSelector(selectArtwork);
  const user = useSelector(selectUser);
  const onDelete = (id) => {
    dispatch(deleteAuction(id));
  };
  useEffect(
    (id) => {
      dispatch(getArtwork());
    },
    [dispatch]
  );

  return (
    <div>
      {!artworks
        ? "Loading... "
        : artworks.map((art) => {
            return (
              <div key={art.id}>
                <Title>{art.title}</Title>
                <img
                  src={art.imageUrl}
                  alt="not found"
                  width="400px"
                /> Bids: {art.bids.length}
                <Link to={`/artwork/${art.id}`}>
                  <Button>View Details</Button>
                </Link>{" "}
                <div>
                  {!user || !user.isArtist ? (
                    ""
                  ) : (
                    <Button
                      onClick={() => {
                        onDelete(art.id);
                      }}
                    >
                      DELETE
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
    </div>
  );
}
