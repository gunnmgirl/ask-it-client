import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { useDispatch } from "react-redux";

import { downvoteAnswer, upvoteAnswer } from "../actions/questionsActions";

const Container = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  padding: 0.4rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

function Answer({ answer }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <StyledText>{answer.body}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          <ThumbsUp
            onClick={() => dispatch(upvoteAnswer({ answerId: answer._id }))}
            size="20"
            strokeWidth="1.5"
          />
          <StyledNumber>{answer.upvotes.count}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <ThumbsDown
            onClick={() => dispatch(downvoteAnswer({ answerId: answer._id }))}
            size="20"
            strokeWidth="1.5"
          />
          <StyledNumber>{answer.downvotes.count}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default Answer;