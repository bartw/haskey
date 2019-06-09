import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import media from "./media";
import { colors } from "./global-style";

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
  color: ${colors.text};
  border: none;

  &.active {
    background-color: ${colors.primary};
    color: hsla(0, 0%, 100%, 0.86);
    border: none;
  }

  :hover {
    color: ${colors.text};
    background-color: white;
    border: none;
  }
`;

const HorizontalNavLink = styled(Link)`
  line-height: 20px;
  padding: 11px 10px 15px 10px;
  display: block;
  color: ${colors.text};
  border-bottom: 4px solid ${colors.background};

  ${media.phone`padding: 11px 8px 15px 8px;`}

  &.active {
    border-bottom: 4px solid ${colors.primary};
  }

  :hover {
    background-color: ${colors.primary};
    color: hsla(0, 0%, 100%, 0.86);
    border-bottom: 4px solid ${colors.primary};
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
