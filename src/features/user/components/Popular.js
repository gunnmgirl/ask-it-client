import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../questions/components/Header";
import SideNav from "../../questions/components/SideNav";
import Loading from "../../../components/Loading";
import LoadMoreButton from "../../../components/LoadMoreButton";
import UserItem from "./UserItem";
import { getMostPopular } from "../actions/userActions";
import { clearPageCounter } from "../../questions/actions/questionsActions";

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

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 6rem;
  }
  @media (min-width: 1200px) {
    margin: 0 16rem;
  }
`;

const StyledP = styled.p`
  text-align: center;
`;

function Popular() {
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.user.page);
  const totalUsers = useSelector((state) => state.user.totalUsers);
  const isLoading = useSelector((state) => state.user.loading);
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
      <div>
        <Header />
        {isLoading ? (
          <Loading />
        ) : users.length === 0 ? (
          <StyledP>No users to show</StyledP>
        ) : (
          <List>
            {users.map((user) => (
              <UserItem user={user} key={user._id}></UserItem>
            ))}
          </List>
        )}
        {!isLoading && users.length < totalUsers ? <LoadMoreButton /> : null}
      </div>
    </MainContainer>
  );
}
export default Popular;
