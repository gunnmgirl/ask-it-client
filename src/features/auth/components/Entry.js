import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HelpCircle } from "react-feather";

import ToggleTheme from "../../../components/ToggleTheme";
import EntryImage from "../../../docs/images/Entry.png";

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
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 10rem;
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

const StyledHelpCircle = styled(HelpCircle)`
  fill: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  align-self: flex-start;
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
    <MainContainer>
      <Container image={EntryImage} />
      <div>
        <ToggleTheme />
        <MainWrapper>
          <StyledHelpCircle size="2.4rem" />
          <h1> Ask questions and get answers on any topic</h1>
          <StyledText>Join Ask it today!</StyledText>
          <SignUp onClick={() => history.push("/signup")}>Sign up</SignUp>
          <LogIn onClick={() => history.push("/login")}>Log in</LogIn>
        </MainWrapper>
      </div>
    </MainContainer>
  );
}

export default Entry;
