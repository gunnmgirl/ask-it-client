import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { upvoteQuestion, downvoteQuestion } from "../actions/questionsActions";

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.onPrimary};
  border-radius: 5px;
  width: 100%;
  min-height: 7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.surface};
  margin: 1rem 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
  :hover {
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  padding: 0.2rem 1rem;
`;

const StyledNumber = styled.span`
  margin-left: 0.2rem;
  color: ${(props) => props.theme.onPrimary};
`;

const Content = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.onHover};
  }
`;

function ListItem({ question }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Container>
      <Content onClick={() => history.push(`/${question._id}`)}>
        <StyledText>{question.body}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          <ThumbsUp
            size="21"
            onClick={() =>
              dispatch(upvoteQuestion({ questionId: question._id }))
            }
          />
          <StyledNumber>{question.upvotes.count}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <ThumbsDown
            size="21"
            onClick={() =>
              dispatch(downvoteQuestion({ questionId: question._id }))
            }
          />
          <StyledNumber>{question.downvotes.count}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <MessageSquare
            size="21"
            onClick={() => history.push(`/${question._id}`)}
          />
          <StyledNumber>{question.answers.length}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default ListItem;
