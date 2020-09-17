import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { downvoteAnswer, upvoteAnswer } from "../actions/questionsActions";

const Container = styled.div`
  color: ${(props) => props.theme.onPrimary};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.surface};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.border};
  padding: 0.4rem 0;
  height: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};
  :hover {
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
`;

const StyledNumber = styled.span`
  margin-left: 0.2rem;
  color: ${(props) => props.theme.onPrimary};
`;

const Content = styled.div`
  min-height: 5rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const StyledThumbsDown = styled(ThumbsDown)`
  fill: ${(props) => props.theme.secondary};
`;

const StyledThumbsUp = styled(ThumbsUp)`
  fill: ${(props) => props.theme.secondary};
`;

function Answer({ answer }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  return (
    <Container>
      <Content>
        <StyledText>{answer.body}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          {answer.upvotes.users.length > 0 &&
          answer.upvotes.users.find((user) => user === userId) ? (
            <StyledThumbsUp
              size="21"
              key={answer._id}
              onClick={() => dispatch(upvoteAnswer({ answerId: answer._id }))}
            />
          ) : (
            <ThumbsUp
              size="21"
              key={answer._id}
              onClick={() => dispatch(upvoteAnswer({ answerId: answer._id }))}
            />
          )}
          <StyledNumber>{answer.upvotes.count}</StyledNumber>
        </Wrapper>
        <Wrapper>
          {answer.downvotes.users.length > 0 &&
          answer.downvotes.users.find((user) => user === userId) ? (
            <StyledThumbsDown
              size="21"
              key={answer._id}
              onClick={() => dispatch(downvoteAnswer({ answerId: answer._id }))}
            />
          ) : (
            <ThumbsDown
              size="21"
              key={answer._id}
              onClick={() => dispatch(downvoteAnswer({ answerId: answer._id }))}
            />
          )}
          <StyledNumber>{answer.downvotes.count}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default Answer;
