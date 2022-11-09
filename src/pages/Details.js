import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { artworkById, editHearts } from "../store/artwork/thunks";
import { selectById } from "../store/artwork/selectors";
import { Title, Button } from "../styled";
import PostBid from "../components/PostBid";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(artworkById(id));
  }, [dispatch, id]);
  const artwork = useSelector(selectById);

  const onClickHearts = () => {
    dispatch(editHearts(artwork.hearts + 1, id));
    // console.log(id);
  };
  return (
    <Container>
      {!artwork ? "Loading..." : <Title>{artwork.title}</Title>}
      <div>
        {!artwork ? (
          "Loading"
        ) : (
          <div>
            {" "}
            <img src={artwork.imageUrl} alt="artwork img" width="500px" />{" "}
            <Button
              onClick={() => {
                onClickHearts();
              }}
            >
              {" "}
              ❤️ {artwork.hearts}
            </Button>
            {artwork.bids.map((bid) => {
              return (
                <div key={bid.id}>
                  <strong> {bid.email} </strong>- {bid.amount}€
                </div>
              );
            })}
          </div>
        )}
        <PostBid />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
`;
