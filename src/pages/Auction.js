import React, { useState } from "react";
import styled from "styled-components";
import { Button, Title, Input } from "../styled";
import { useDispatch } from "react-redux";
import { postArtwork } from "../store/artwork/thunks";

export default function Auction() {
  const [title, setTitle] = useState("Le fils de l'homme");
  const [imageUrl, setImageUrl] = useState(
    "http://www.isztuka.edu.pl/i-sztuka/sites/default/files/styles/large/public/025_rene_magritte_syn_czlowieczy_01.jpg?itok=UxyYfHM_"
  );
  const [minimumBid, setMinimumBid] = useState(10);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postArtwork(title, imageUrl, minimumBid));
    setTitle("");
    setImageUrl("");
    setMinimumBid("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>New Artwork</Title>
        <form onSubmit={submitForm}>
          <Input
            placeholder="artwork title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />{" "}
          <Input
            type="number"
            placeholder="minimum bid"
            value={minimumBid}
            onChange={(e) => setMinimumBid(e.target.value)}
          />
          <br />
          <Button type="submit">Post new Artwork</Button>
        </form>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  margin: 15%;
`;
