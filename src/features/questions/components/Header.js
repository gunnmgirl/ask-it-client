import React from "react";
import styled from "styled-components";
import { Home, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { getLatestQuestions } from "../actions/questionsActions";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.questions.page);

  React.useEffect(() => {
    dispatch(getLatestQuestions({ page }));
  }, [dispatch, page]);

  return (
    <Container>
      <h2>Ask it</h2>
      <Home onClick={() => dispatch(getLatestQuestions())} />
      <User />
    </Container>
  );
}

export default Header;
