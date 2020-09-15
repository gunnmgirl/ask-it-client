import React from "react";
import styled from "styled-components";
import { Home, User, LogOut } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ToggleTheme from "../../../components/ToggleTheme";
import { logout } from "../../auth/actions/authActions";

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
  padding: 0;
`;

const StyledLogOut = styled(LogOut)`
  :hover {
    cursor: pointer;
  }
`;

function Header() {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const history = useHistory();

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
      <div>
        <StyledLogOut
          onClick={() => {
            dispatch(logout());
            localStorage.removeItem("token");
            history.push("/");
          }}
        />
      </div>
      <ToggleTheme />
    </Container>
  );
}

export default Header;
