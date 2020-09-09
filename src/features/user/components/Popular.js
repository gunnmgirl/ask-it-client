import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../questions/components/Header";
import SubHeader from "../../questions/components/SubHeader";
import UserItem from "./UserItem";
import { getMostPopular } from "../actions/userActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  min-height: 100vh;
  height: auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 24rem;
  align-items: center;
`;

function Hot() {
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.user.page);
  const dispatch = useDispatch();

  console.log(users);

  React.useEffect(() => {
    dispatch(getMostPopular({ page }));
  }, [dispatch, page]);
  return (
    <MainContainer>
      <Header />
      <SubHeader />
      <List>
        {users.map((user) => (
          <UserItem user={user} key={user._id}></UserItem>
        ))}
      </List>
    </MainContainer>
  );
}
export default Hot;
