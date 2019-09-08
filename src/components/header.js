import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../global-style";
import media from "../media";
import logo from "../images/haskey.svg";
import Menu from "./menu";

const Header = styled.header`
  border-top: 6px solid ${colors.primary};
  height: 94px;
  min-height: 94px;
  display: flex;

  ${media.phone`
    height: 69px;
    min-height: 69px;
  `}
`;

const HomeLink = styled(Link)`
  box-sizing: border-box;
  height: 100%;
  padding: 0 5px;
`;

const Logo = styled.img`
  height: 100%;
`;

export default () => (
  <Header>
    <HomeLink to="/">
      <Logo src={logo} alt="logo" />
    </HomeLink>
    <Menu />
  </Header>
);
