import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { loadMoreQuestions } from "../actions/questionsActions";

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.warning};
  font-size: 1rem;
  border-radius: 5px;
  height: 2rem;
  width: 9rem;
  margin-right: 0.4rem;
  color: ${(props) => props.theme.warning};
  background-color: ${(props) => props.theme.backgroundPrimary};
  align-self: center;
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
