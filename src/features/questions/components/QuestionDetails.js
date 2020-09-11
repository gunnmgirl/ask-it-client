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
import EditAnswer from "./EditAnswer";

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
  color: ${(props) => props.theme.primary};
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MainWrapper = styled.div`
  width: 16rem;
  margin: 0.2rem 0;
  min-height: 5rem;
  height: auto;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 5px;
  height: 1.8rem;
  width: 4rem;
  color: ${(props) => props.theme.backgroundPrimary};
  background-color: ${(props) => props.theme.warning};
`;

const StyledButtonDark = styled(StyledButton)`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.warning};
`;

function QuestionDetails() {
  const question = useSelector((state) => state.questions.question);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    dispatch(getQuestionAndAnswers(questionId));
  }, [dispatch, questionId]);

  function handleOnSubmit() {
    setIsEditing(false);
  }

  return (
    <MainContainer>
      <Header />
      <Container>
        <ListItem question={question} key={question._id} />
        <AnswerForm />
        <Answers>
          {question.answers.map((answer) => (
            <MainWrapper key={answer._id}>
              {userId === answer.createdBy ? (
                <Wrapper>
                  <StyledButtonDark
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
                  </StyledButtonDark>
                  <StyledButton onClick={() => setIsEditing(answer._id)}>
                    Edit
                  </StyledButton>
                </Wrapper>
              ) : null}
              <Answer>
                {isEditing === answer._id ? (
                  <EditAnswer
                    answerId={answer._id}
                    handleOnSubmit={handleOnSubmit}
                    initialValue={answer.body}
                  />
                ) : (
                  <p>{answer.body}</p>
                )}
              </Answer>
            </MainWrapper>
          ))}
        </Answers>
      </Container>
    </MainContainer>
  );
}

export default QuestionDetails;
