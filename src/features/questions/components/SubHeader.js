import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import {
  getHotQuestions,
  getLatestQuestions,
} from "../actions/questionsActions";

import { getMostPopular } from "../../user/actions/userActions";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function SubHeader() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.questions.page);

  React.useEffect(() => {
    dispatch(getLatestQuestions({ page }));
  }, [dispatch, page]);

  return (
    <Container>
      <Home onClick={() => dispatch(getLatestQuestions({ page }))} />
      <Home onClick={() => dispatch(getHotQuestions({ page }))} />
      <Home onClick={() => dispatch(getMostPopular({ page }))} />
    </Container>
  );
}

export default SubHeader;
