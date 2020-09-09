import React from "react";
import styled from "styled-components";
import { Home, User } from "react-feather";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  padding: 0 24rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserIcon = styled(User)`
  margin-left: 1rem;
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.warning};
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

function Header() {
  return (
    <Container>
      <StyledHeader>Ask it</StyledHeader>
      <Wrapper>
        <StyledLink to="/">
          <Home />
        </StyledLink>
        <StyledUserIcon />
      </Wrapper>
    </Container>
  );
}

export default Header;
