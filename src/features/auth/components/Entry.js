import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  color: ${(props) => props.theme.primary};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Wrapper = styled.div`
  margin: 1.2rem 0;
`;

const StyledText = styled.span`
  font-weight: 700;
  margin-left: 0.6rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.backgroundButton};
  border: 2px solid ${(props) => props.theme.backgroundButton};
  border-radius: 10px;
  width: 18rem;
  height: 2rem;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

const StyledButtonDark = styled(StyledButton)`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
`;

function Entry() {
  const history = useHistory();

  return (
    <Container>
      <h1>Ask it</h1>
      <Wrapper>
        <span>Curious?</span>
        <StyledText>Just ask!</StyledText>
      </Wrapper>
      <StyledButton onClick={() => history.push("/signup")}>
        Sign up
      </StyledButton>
      <StyledButtonDark onClick={() => history.push("/login")}>
        Log in
      </StyledButtonDark>
    </Container>
  );
}

export default Entry;
