import React from "react";
import styled from "styled-components";
import { Home, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { getLatestQuestions } from "../actions/questionsActions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  padding: 0 24rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserIcon = styled(User)`
  margin-left: 1rem;
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.warning};
  margin: 0.5rem 0;
`;

function Header() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.questions.page);

  React.useEffect(() => {
    dispatch(getLatestQuestions({ page }));
  }, [dispatch, page]);

  return (
    <Container>
      <StyledHeader>Ask it</StyledHeader>
      <Wrapper>
        <Home onClick={() => dispatch(getLatestQuestions())} />
        <StyledUserIcon />
      </Wrapper>
    </Container>
  );
}

export default Header;
