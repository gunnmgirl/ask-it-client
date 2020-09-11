import React from "react";
import styled from "styled-components";
import { User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Header from "../../questions/components/Header";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";

import { getUser } from "../actions/userActions";

const MainContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  padding: 4rem 24rem;
`;

const StyledUserIcon = styled(User)`
  height: 22rem;
  width: 12rem;
  color: ${(props) => props.theme.primary};
  margin-right: 4rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.warning};
  font-size: 1rem;
  border-radius: 5px;
  height: 2rem;
  width: 9rem;
  margin-right: 0.4rem;
  color: ${(props) => props.theme.warning};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const StyledText = styled.span`
  margin: 0 0.2rem;
`;

const EditButton = styled(StyledButton)`
  margin: 1.4rem 0;
  align-self: flex-end;
  border-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Container = styled.div`
  border: 1.6px solid ${(props) => props.theme.border};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

function Profile() {
  const { userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isChanging, setIsChanging] = React.useState(false);

  function handleOnEdit() {
    setIsEditing(false);
  }

  function handleOnChange() {
    setIsChanging(false);
  }

  React.useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <StyledUserIcon strokeWidth="1" />
          {!me ? (
            <div>Loading..</div>
          ) : isEditing ? (
            <EditProfileForm
              initialValues={{ firstName: me.firstName, lastName: me.lastName }}
              handleOnEdit={handleOnEdit}
            />
          ) : isChanging ? (
            <ChangePasswordForm handleOnChange={handleOnChange} />
          ) : (
            <Info>
              <EditButton onClick={() => setIsEditing(true)}>
                Edit Profile
              </EditButton>
              <Wrapper>
                <StyledText>First Name:</StyledText>
                <StyledText>{me.firstName}</StyledText>
              </Wrapper>
              <Wrapper>
                <StyledText>Last Name:</StyledText>
                <StyledText>{me.lastName}</StyledText>
              </Wrapper>
              <Wrapper>
                <StyledText>Email:</StyledText>
                <StyledText>{me.email}</StyledText>
              </Wrapper>
              <Wrapper>
                <StyledButton onClick={() => history.push("/")}>
                  My Questions
                </StyledButton>
                <StyledButton onClick={() => setIsChanging(true)}>
                  Change Password
                </StyledButton>
              </Wrapper>
            </Info>
          )}
        </Container>
      </MainContainer>
    </>
  );
}

export default Profile;
