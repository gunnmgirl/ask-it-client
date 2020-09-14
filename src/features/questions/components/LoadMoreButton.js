import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { loadMoreQuestions } from "../actions/questionsActions";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.secondary};
  font-size: 1rem;
  border-radius: 5px;
  height: 2rem;
  width: 9rem;
  margin: 0.4rem 0;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.surface};
  align-self: center;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.onHover};
  }
`;

function LoadMoreButton() {
  const dispatch = useDispatch();

  return (
    <StyledButton
      onClick={() => {
        dispatch(loadMoreQuestions());
      }}
    >
      Load More
    </StyledButton>
  );
}

export default LoadMoreButton;
