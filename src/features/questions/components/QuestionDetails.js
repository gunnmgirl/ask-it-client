import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { getQuestion } from "../actions/questionsActions";
import ListItem from "./ListItem";
import AnswerForm from "./AnswerForm";
import Header from "./Header";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  min-height: 100vh;
  height: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 24rem;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Answer = styled.div`
  width: 50%;
  min-height: 4rem;
  height: auto;
  border: 0.1rem solid ${(props) => props.theme.border};
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  text-align: center;
  margin: 0.2rem 0;
`;

function PostDetails() {
  const question = useSelector((state) => state.questions.question);
  const dispatch = useDispatch();
  const { questionId } = useParams();

  React.useEffect(() => {
    dispatch(getQuestion(questionId));
  }, [dispatch, questionId]);

  return (
    <MainContainer>
      <Header />
      <Container>
        <ListItem question={question} key={question._id} />
        <AnswerForm />
        <Answers></Answers>
      </Container>
    </MainContainer>
  );
}

export default PostDetails;
