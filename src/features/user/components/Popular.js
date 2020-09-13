import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../questions/components/Header";
import SideNav from "../../questions/components/SideNav";
import Loading from "../../questions/components/Loading";
import LoadMoreButton from "../../questions/components/LoadMoreButton";
import UserItem from "./UserItem";
import { getMostPopular } from "../actions/userActions";
import { clearPageCounter } from "../../questions/actions/questionsActions";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 5fr;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  @media (min-width: 992px) {
    margin: 0 16rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Popular() {
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.user.page);
  const totalUsers = useSelector((state) => state.user.totalUsers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getMostPopular({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <SideNav />
      <Container>
        <Header />
        {users.length === 0 ? (
          <Loading />
        ) : (
          <List>
            {users.map((user) => (
              <UserItem user={user} key={user._id}></UserItem>
            ))}
          </List>
        )}
        {users.length < totalUsers ? <LoadMoreButton /> : null}
      </Container>
    </MainContainer>
  );
}
export default Popular;
