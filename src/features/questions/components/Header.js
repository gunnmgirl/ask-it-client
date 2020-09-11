import React from "react";
import styled from "styled-components";
import { Home, User, Sun, Moon } from "react-feather";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleDark, toggleLight } from "../../../themes/actions/themesActions";

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
  margin: 0 1rem;
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
  const userId = useSelector((state) => state.auth.userId);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Container>
      <StyledHeader>Ask it</StyledHeader>
      <Wrapper>
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
        {theme === "light" ? (
          <Moon
            onClick={() => {
              dispatch(toggleDark());
            }}
          />
        ) : (
          <Sun
            onClick={() => {
              dispatch(toggleLight());
            }}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default Header;
