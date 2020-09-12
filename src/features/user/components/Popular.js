import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../questions/components/Header";
import SubHeader from "../../questions/components/SubHeader";
import UserItem from "./UserItem";
import { getMostPopular } from "../actions/userActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.primary};
  min-height: 100vh;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;
  align-items: center;
  @media (min-width: 768px) {
    padding: 2rem 16rem;
  }
  @media (min-width: 992px) {
    padding: 2rem 24rem;
  }
`;

function Hot() {
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.user.page);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMostPopular({ page }));
  }, [dispatch, page]);
  return (
    <MainContainer>
      <Header />
      <SubHeader />
      {users.length === 0 ? (
        <div>Loading..</div>
      ) : (
        <List>
          {users.map((user) => (
            <UserItem user={user} key={user._id}></UserItem>
          ))}
        </List>
      )}
    </MainContainer>
  );
}
export default Hot;
