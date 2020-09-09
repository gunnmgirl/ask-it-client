import React from "react";
import styled from "styled-components";

import Header from "./Header";
import SubHeader from "./SubHeader";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 100vh;
  width: 100%;
`;

function Feed() {
  return (
    <MainContainer>
      <Header />
      <SubHeader />
    </MainContainer>
  );
}

export default Feed;
