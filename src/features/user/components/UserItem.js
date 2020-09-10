import React from "react";
import styled from "styled-components";
import { MessageSquare } from "react-feather";

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  width: 16rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin: 1rem 0.2rem;
`;

const StyledText = styled.span`
  padding: 0 0.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled(Wrapper)`
  align-self: end;
`;

function ListItem(props) {
  const { user } = props;

  return (
    <Container>
      <Wrapper>
        <StyledText>{user.firstName}</StyledText>
        <StyledText>{user.lastName}</StyledText>
      </Wrapper>
      <StyledWrapper>
        <MessageSquare />
        <StyledText>{user.length}</StyledText>
      </StyledWrapper>
    </Container>
  );
}

export default ListItem;
