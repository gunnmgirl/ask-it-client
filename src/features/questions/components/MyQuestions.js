import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import SubHeader from "./SubHeader";
import ListItem from "./ListItem";
import { getMyQuestions } from "../actions/questionsActions";

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

function MyQuestions() {
  const questions = useSelector((state) => state.questions.questions);
  const page = useSelector((state) => state.questions.page);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMyQuestions({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <Header />
      <SubHeader />
      {questions.length === 0 ? (
        <div>Loading..</div>
      ) : (
        <List>
          {questions.map((question) => (
            <ListItem question={question} key={question._id}></ListItem>
          ))}
        </List>
      )}
    </MainContainer>
  );
}

export default MyQuestions;
