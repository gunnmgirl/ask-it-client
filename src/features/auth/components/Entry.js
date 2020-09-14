import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HelpCircle } from "react-feather";

import ToggleTheme from "../../../components/ToggleTheme";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0 1fr;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Container = styled.div`
  background: url(docs/images/entry.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 1.2rem 0;
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
`;

const ImageText = styled.p`
  font-size: 1.2rem;
  margin-left: 0.6rem;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 10rem;
`;

const StyledHelpCircle = styled(HelpCircle)`
  fill: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  align-self: flex-start;
`;

const SignUp = styled.button`
  width: 100%;
  height: 2.2rem;
  font-size: 1rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.8rem;
  :hover {
    cursor: pointer;
  }
`;

const LogIn = styled.button`
  width: 100%;
  height: 2.2rem;
  font-size: 1rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.secondary};
  :hover {
    background-color: ${(props) => props.theme.onHover};
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  align-self: flex-start;
`;

function Entry() {
  const history = useHistory();

  return (
    <>
      <ToggleTheme />
      <MainContainer>
        <Container>
          <Wrapper>
            <HelpCircle size="1.8rem" />
            <ImageText>Follow your interests.</ImageText>
          </Wrapper>
          <Wrapper>
            <HelpCircle size="1.8rem" />
            <ImageText>Hear what people are talking about.</ImageText>
          </Wrapper>
          <Wrapper>
            <HelpCircle size="1.8rem" />
            <ImageText>Join the conversation.</ImageText>
          </Wrapper>
        </Container>
        <MainWrapper>
          <StyledHelpCircle size="2.4rem" />
          <h1> Ask questions and get answers on any topic</h1>
          <StyledText>Join Ask it today!</StyledText>
          <SignUp onClick={() => history.push("/signup")}>Sign up</SignUp>
          <LogIn onClick={() => history.push("/login")}>Log in</LogIn>
        </MainWrapper>
      </MainContainer>
    </>
  );
}

export default Entry;
