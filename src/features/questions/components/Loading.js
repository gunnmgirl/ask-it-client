import React from "react";
import { Loader } from "react-feather";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.onPrimary};
  justify-content: center;
  margin: 4rem 0;
`;

function Loading() {
  return (
    <Container>
      <Loader size="3.5rem" />
    </Container>
  );
}

export default Loading;
