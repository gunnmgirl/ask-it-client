import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import SideNav from "./SideNav";
import ListItem from "./ListItem";
import LoadMoreButton from "./LoadMoreButton";
import Loading from "./Loading";
import { getMyQuestions, clearPageCounter } from "../actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16rem;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function MyQuestions() {
  const questions = useSelector((state) => state.questions.questions);
  const page = useSelector((state) => state.questions.page);
  const totalQuestions = useSelector((state) => state.questions.totalQuestions);

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

export default MyQuestions;
