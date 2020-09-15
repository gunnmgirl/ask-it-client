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
import SideNav from "./SideNav";
import EditAnswer from "./EditAnswer";
import Answer from "./Answer";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
  }
`;

const Container = styled.div`
  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  @media (min-width: 768px) {
    padding: 0 6rem;
  }
  @media (min-width: 1200px) {
    padding: 0 12rem;
  }
`;

const Answers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MainWrapper = styled.div`
  width: 75%;
  margin: 0.6rem 0;
  background-color: ${(props) => props.theme.surface};
  border: 0.1rem solid ${(props) => props.theme.border};
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.secondary};
  border-radius: 0;
  border-top-right-radius: 5px;
  height: 2rem;
  font-size: 1rem;
  width: 4.5rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  :hover {
    cursor: pointer;
  }
`;

const StyledButtonDark = styled(StyledButton)`
  background-color: ${(props) => props.theme.surface};
  border-radius: 0;
  border-bottom-left-radius: 5px;
  color: ${(props) => props.theme.secondary};
  border-color: ${(props) => props.theme.secondary};
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
      <SideNav />
      <div>
        <Header />
        <Container>
          <ListItem question={question} key={question._id} />
          <AnswerForm />
          <Answers>
            {question.answers.map((answer) => (
              <MainWrapper key={answer._id}>
                {userId === answer.createdBy ? (
                  <Wrapper>
                    <StyledButtonDark onClick={() => setIsEditing(answer._id)}>
                      Edit
                    </StyledButtonDark>
                    <StyledButton
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
                    </StyledButton>
                  </Wrapper>
                ) : null}
                {isEditing === answer._id ? (
                  <EditAnswer
                    answerId={answer._id}
                    handleOnSubmit={handleOnSubmit}
                    initialValue={answer.body}
                  />
                ) : (
                  <Answer answer={answer} />
                )}
              </MainWrapper>
            ))}
          </Answers>
        </Container>
      </div>
    </MainContainer>
  );
}

export default QuestionDetails;
