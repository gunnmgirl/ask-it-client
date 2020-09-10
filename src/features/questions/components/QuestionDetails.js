import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {
  getQuestionAndAnswers,
  deleteAnswer,
} from "../actions/questionsActions";
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
`;

const Answer = styled.div`
  width: 12rem;
  min-height: 4rem;
  height: auto;
  border: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin: 0.2rem 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

function QuestionDetails() {
  const question = useSelector((state) => state.questions.question);
  const me = useSelector((state) => state.user.me);
  const dispatch = useDispatch();
  const { questionId } = useParams();

  React.useEffect(() => {
    dispatch(getQuestionAndAnswers(questionId));
  }, [dispatch, questionId]);

  return (
    <MainContainer>
      <Header />
      <Container>
        <ListItem question={question} key={question._id} />
        <AnswerForm />
        <Answers>
          {question.answers.map((answer) => (
            <>
              {me === answer.createdBy ? (
                <Wrapper>
                  <button
                    onClick={() =>
                      dispatch(
                        deleteAnswer({
                          answerId: answer._id,
                          questionId: question._id,
                        })
                      )
                    }
                  >
                    Delete
                  </button>
                </Wrapper>
              ) : null}
              <Answer>
                <p>{answer.body}</p>
              </Answer>
            </>
          ))}
        </Answers>
      </Container>
    </MainContainer>
  );
}

export default QuestionDetails;
