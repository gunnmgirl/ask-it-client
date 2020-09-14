import React from "react";
import styled from "styled-components";
import { Home, User } from "react-feather";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ToggleTheme from "../../../components/ToggleTheme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const StyledUserIcon = styled(User)`
  margin: 0 1rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.onPrimary};
  text-decoration: none;
`;

function Header() {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <Container>
      <StyledLink to="/">
        <Home />
      </StyledLink>
      <StyledLink
        to={{
          pathname: `/profile/${userId}`,
        }}
      >
        <StyledUserIcon />
      </StyledLink>
      <ToggleTheme />
    </Container>
  );
}

export default Header;
