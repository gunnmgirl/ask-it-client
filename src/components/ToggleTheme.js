import React from "react";
import styled from "styled-components";
import { Sun, Moon } from "react-feather";
import { useSelector, useDispatch } from "react-redux";

import { toggleDark, toggleLight } from "../themes/actions/themesActions";

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.onPrimary};
  background-color: ${(props) => props.theme.primary};
  padding: 1rem 2rem;
  :hover {
    cursor: pointer;
  }
`;

function ToggleTheme() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return theme === "light" ? (
    <StyledIcon>
      <Moon
        onClick={() => {
          dispatch(toggleDark());
        }}
      />
    </StyledIcon>
  ) : (
    <StyledIcon>
      <Sun
        onClick={() => {
          dispatch(toggleLight());
        }}
      />
    </StyledIcon>
  );
}

export default ToggleTheme;
