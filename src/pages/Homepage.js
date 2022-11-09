import styled from "styled-components";
import Artwork from "../components/Artwork";

export const Homepage = () => {
  return (
    <Container>
      <Artwork />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
