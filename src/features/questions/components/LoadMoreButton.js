import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { loadMoreQuestions } from "../actions/questionsActions";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.blue};
  font-size: 1rem;
  border-radius: 5px;
  height: 2rem;
  width: 9rem;
  margin: 0.4rem 0;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.gray};
  align-self: center;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.blueHover};
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
