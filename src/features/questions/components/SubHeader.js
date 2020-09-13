import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primaryLight};
  align-items: center;
  padding: 0.4rem 6rem;
  @media (min-width: 768px) {
    padding: 0.4rem 14rem;
  }
  @media (min-width: 992px) {
    padding: 0.4rem 24rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.onPrimary};
  text-decoration: none;
`;

function SubHeader() {
  return (
    <Container>
      <StyledLink to="/">Latest</StyledLink>
      <StyledLink to="/popular">Popular</StyledLink>
      <StyledLink to="/hot">Hot Questions</StyledLink>
      <StyledLink to="/myQuestions">My Questions</StyledLink>
    </Container>
  );
}

export default SubHeader;
