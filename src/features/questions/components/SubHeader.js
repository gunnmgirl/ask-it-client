import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 24rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

function SubHeader() {
  return (
    <Container>
      <StyledLink to="/">Latest</StyledLink>
      <StyledLink to="/popular">Popular</StyledLink>
      <StyledLink to="/hot">Hot Questions</StyledLink>
    </Container>
  );
}

export default SubHeader;
