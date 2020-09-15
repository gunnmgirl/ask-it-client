import React from "react";
import styled from "styled-components";
import { User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Header from "../../questions/components/Header";
import SideNav from "../../questions/components/SideNav";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import Loading from "../../../components/Loading";

import { getUser } from "../actions/userActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
  }
`;

const StyledUserIcon = styled(User)`
  height: 22rem;
  width: 12rem;
  color: ${(props) => props.theme.onPrimary};
  @media (min-width: 992px) {
    margin-right: 4rem;
  }
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
  border: 0.1rem solid ${(props) => props.theme.secondary};
  font-size: 1rem;
  border-radius: 5px;
  min-height: 2rem;
  width: 9rem;
  margin-right: 0.4rem;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.surface};
  :hover {
    cursor: pointer;
  }
`;

const StyledText = styled.span`
  margin: 0 0.2rem;
`;

const EditButton = styled(StyledButton)`
  margin: 1.4rem 0;
  align-self: flex-start;
  @media (min-width: 768px) {
    align-self: flex-end;
  }
  border-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.primary};
  @media (min-width: 768px) {
    flex-direction: row;
  }
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
      <MainContainer>
        <SideNav />
        <div>
          <Header />
          <Container>
            <StyledUserIcon strokeWidth="1px" />
            {!me ? (
              <Loading />
            ) : isEditing ? (
              <EditProfileForm
                initialValues={{
                  firstName: me.firstName,
                  lastName: me.lastName,
                }}
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
                  <StyledButton onClick={() => history.push("/myQuestions")}>
                    My Questions
                  </StyledButton>
                  <StyledButton onClick={() => setIsChanging(true)}>
                    Change Password
                  </StyledButton>
                </Wrapper>
              </Info>
            )}
          </Container>
        </div>
      </MainContainer>
    </>
  );
}

export default Profile;
