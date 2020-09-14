import React from "react";
import styled from "styled-components";
import { MessageSquare, User } from "react-feather";

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.onPrimary};
  border-radius: 5px;
  height: 4rem;
  width: 16rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.surface};
  margin: 1rem 0.3rem;
`;

const StyledText = styled.span`
  padding: 0 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledUser = styled(User)`
  margin-right: 2rem;
`;

const StyledMessageSquare = styled(MessageSquare)`
  color: ${(props) => props.theme.secondary};
`;

function UserItem(props) {
  const { user } = props;

  return (
    <Container>
      <StyledUser size="3rem" strokeWidth="1.5px" />
      <Wrapper>
        <StyledText>
          {user.firstName}
          {user.lastName}
        </StyledText>
        <StyledWrapper>
          <StyledMessageSquare />
          <StyledText>{user.length}</StyledText>
        </StyledWrapper>
      </Wrapper>
    </Container>
  );
}

export default UserItem;
