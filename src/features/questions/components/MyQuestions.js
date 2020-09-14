import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import SideNav from "./SideNav";
import ListItem from "./ListItem";
import LoadMoreButton from "../../../components/LoadMoreButton";
import Loading from "../../../components/Loading";
import { getMyQuestions, clearPageCounter } from "../actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  min-height: 100vh;
  display: grid;
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

const StyledP = styled.p`
  text-align: center;
`;

function MyQuestions() {
  const questions = useSelector((state) => state.questions.questions);
  const page = useSelector((state) => state.questions.page);
  const totalQuestions = useSelector((state) => state.questions.totalQuestions);
  const isLoading = useSelector((state) => state.questions.loading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getMyQuestions({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <SideNav />
      <div>
        <Header />
        {isLoading ? (
          <Loading />
        ) : questions.length === 0 ? (
          <StyledP>No questions to show</StyledP>
        ) : (
          <Container>
            <List>
              {questions.map((question) => (
                <ListItem question={question} key={question._id}></ListItem>
              ))}
            </List>
            {!isLoading && questions.length < totalQuestions ? (
              <LoadMoreButton />
            ) : null}
          </Container>
        )}
      </div>
    </MainContainer>
  );
}

export default MyQuestions;
