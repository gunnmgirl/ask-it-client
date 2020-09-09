import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import SubHeader from "./SubHeader";
import ListItem from "./ListItem";
import { getHotQuestions } from "../actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  min-height: 100vh;
  height: auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 24rem;
  align-items: center;
`;

function Hot() {
  const questions = useSelector((state) => state.questions.questions);
  const page = useSelector((state) => state.questions.page);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getHotQuestions({ page }));
  }, [dispatch, page]);
  return (
    <MainContainer>
      <Header />
      <SubHeader />
      <List>
        {questions.map((question) => (
          <ListItem question={question} key={question._id}></ListItem>
        ))}
      </List>
    </MainContainer>
  );
}
export default Hot;
