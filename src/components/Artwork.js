import React from "react";
import { Button, Input, Title, LinkWord } from "../styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtwork } from "../store/artwork/thunks";
import { selectArtwork } from "../store/artwork/selectors";

export default function Artwork() {
  const dispatch = useDispatch();
  const artworks = useSelector(selectArtwork);
  useEffect(() => {
    dispatch(getArtwork());
  }, []);

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
                <Link to={`/artwork/${artworks.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
