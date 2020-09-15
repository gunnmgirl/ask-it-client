import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  background-color: ${(props) => props.theme.surface};
  display: flex;
  flex-direction: column;
  height: 12rem;
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
  width: 100%;
  @media (min-width: 768px) {
    padding: 3rem 0;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.onPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  :hover {
    background-color: ${(props) => props.theme.onHover};
    border: 0.3px solid ${(props) => props.theme.border};
    border-right: none;
  }
  &.active {
    color: ${(props) => props.theme.warning};
  }
`;

function SideNav() {
  return (
    <StyledSideNav>
      <SideNavColumn>
        <StyledLink to="/" exact>
          Latest
        </StyledLink>
        <StyledLink to="/hot">Hot Questions</StyledLink>
        <StyledLink to="/popular">Popular</StyledLink>
        <StyledLink to="/myQuestions">My Questions</StyledLink>
      </SideNavColumn>
    </StyledSideNav>
  );
}

export default SideNav;
