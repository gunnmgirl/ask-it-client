import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import ListItem from "./ListItem";
import SideNav from "./SideNav";

import QuestionForm from "./QuestionForm";
import LoadMoreButton from "./LoadMoreButton";
import Loading from "./Loading";
import {
  getLatestQuestions,
  clearPageCounter,
} from "../actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 6rem;
  }
  @media (min-width: 1200px) {
    margin: 0 16rem;
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
      <SideNav />
      <div>
        <Header />
        <QuestionForm />
        {questions.length === 0 ? (
          <Loading />
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
      </div>
    </MainContainer>
  );
}

export default Latest;
