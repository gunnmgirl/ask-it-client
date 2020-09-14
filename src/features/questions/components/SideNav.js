import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  background-color: ${(props) => props.theme.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.3px solid ${(props) => props.theme.border};
  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    overflow-x: hidden;
    height: 100vh;
    border-right: 0.3px solid ${(props) => props.theme.border};
  }
`;

const SideNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 0;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.onPrimary};
  display: flex;
  justify-content: center;
  margin: 0.6rem 0;
  &.active {
    color: ${(props) => props.theme.warning};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  :hover {
    background-color: ${(props) => props.theme.onHover};
    border: 0.3px solid ${(props) => props.theme.border};
    border-right: none;
  }
`;

function SideNav() {
  return (
    <StyledSideNav>
      <SideNavColumn>
        <Wrapper>
          <StyledLink to="/" exact>
            Latest
          </StyledLink>
        </Wrapper>
        <Wrapper>
          <StyledLink to="/hot">Hot Questions</StyledLink>
        </Wrapper>
        <Wrapper>
          <StyledLink to="/popular">Popular</StyledLink>
        </Wrapper>
        <Wrapper>
          <StyledLink to="/myQuestions">My Questions</StyledLink>
        </Wrapper>
      </SideNavColumn>
    </StyledSideNav>
  );
}

export default SideNav;
