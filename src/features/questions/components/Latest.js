import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import SubHeader from "./SubHeader";
import ListItem from "./ListItem";
import QuestionForm from "./QuestionForm";
import LoadMoreButton from "./LoadMoreButton";
import {
  getLatestQuestions,
  clearPageCounter,
} from "../actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  min-height: 100vh;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 16rem;
  }
  @media (min-width: 992px) {
    padding: 0 24rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Latest() {
  const questions = useSelector((state) => state.questions.questions);
  const page = useSelector((state) => state.questions.page);
  const totalQuestions = useSelector((state) => state.questions.totalQuestions);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getLatestQuestions({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <Header />
      <SubHeader />
      <QuestionForm />
      {questions.length === 0 ? (
        <div>Loading..</div>
      ) : (
        <Container>
          <List>
            {questions.map((question) => (
              <ListItem question={question} key={question._id}></ListItem>
            ))}
          </List>
          {questions.length < totalQuestions ? <LoadMoreButton /> : null}
        </Container>
      )}
    </MainContainer>
  );
}

export default Latest;
