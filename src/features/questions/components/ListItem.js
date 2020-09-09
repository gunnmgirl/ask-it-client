import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  width: 100%;
  min-height: 7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin: 1rem 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
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

function ListItem(props) {
  const { question } = props;

  return (
    <Container>
      <Content>
        <StyledText>{question.body}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          <ThumbsUp size="20" strokeWidth="1.5" />
          <StyledNumber>{question.upvotes}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <ThumbsDown size="20" strokeWidth="1.5" />
          <StyledNumber>{question.downvotes}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <MessageSquare size="20" strokeWidth="1.5" />
          <StyledNumber>{22}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default ListItem;
