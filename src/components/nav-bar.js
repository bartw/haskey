import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import media from "./media";

const NavBar = styled.ul`
  list-style-type: none;
  text-align: left;
`;

const Item = ({ vertical, children }) =>
  vertical ? (
    <VerticalItem>{children}</VerticalItem>
  ) : (
    <HorizontalItem>{children}</HorizontalItem>
  );

const VerticalItem = styled.li`
  float: none;
`;

const HorizontalItem = styled.li`
  float: left;
`;

const NavLink = ({ vertical, children, ...props }) =>
  vertical ? (
    <VerticalNavLink {...props}>{children}</VerticalNavLink>
  ) : (
    <HorizontalNavLink {...props}>{children}</HorizontalNavLink>
  );

const VerticalNavLink = styled(Link)`
  line-height: 20px;
  padding: 20px 80px 20px 10px;
  display: block;
  color: #353535;
  border: none;

  &.active {
    background-color: #266dd3;
    color: hsla(0, 0%, 100%, 0.86);
    border: none;
  }

  :hover {
    color: #353535;
    background-color: white;
    border: none;
  }
`;

const HorizontalNavLink = styled(Link)`
  line-height: 20px;
  padding: 11px 10px 15px 10px;
  display: block;
  color: #353535;
  border-bottom: 4px solid #ffffff;

  ${media.phone`padding: 11px 8px 15px 8px;`}

  &.active {
    border-bottom: 4px solid #266dd3;
  }

  :hover {
    background-color: #266dd3;
    color: hsla(0, 0%, 100%, 0.86);
    border-bottom: 4px solid #266dd3;
  }
`;

const NavBarItem = ({ vertical, to, label }) => (
  <Item vertical={vertical}>
    <NavLink vertical={vertical} to={to} activeClassName="active">
      {label}
    </NavLink>
  </Item>
);

export default ({ vertical }) => (
  <NavBar>
    <NavBarItem vertical={vertical} to="/" label="HOME" />
    <NavBarItem vertical={vertical} to="/trainingen/" label="TRAININGEN" />
    <NavBarItem vertical={vertical} to="/proberen/" label="PROBEREN" />
    <NavBarItem vertical={vertical} to="/inschrijven/" label="INSCHRIJVEN" />
  </NavBar>
);
