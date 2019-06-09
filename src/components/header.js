import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import NavBar from "./nav-bar";
import Hamburger from "./hamburger";
import media from "./media";
import logo from "../haskey.svg";
import { colors } from "./global-style";

const Header = styled.header`
  border-top: 4px solid ${colors.primary};
`;

const Left = styled.div`
  float: left;
  padding: 0 5px;
`;

const HomeLink = styled(Link)`
  display: block;
`;

const Logo = styled.div`
  height: 100px;
  margin: 5px 5px 5px 0;

  ${media.tablet`height: 75px;`}
  ${media.phone`height: 50px;`}
`;

const LogoImage = styled.img`
  height: 100%;
`;

const Nav = styled.nav`
  float: right;
`;

const DesktopOnly = styled.div`
  display: block;
  ${media.tablet`display: none;`}
  ${media.phone`display: none;`}
`;

const MobileOnly = styled.div`
  display: none;
  ${media.tablet`display: block;`}
  ${media.phone`display: block;`}
`;

export default () => (
  <Header>
    <Left>
      <HomeLink to="/">
        <Logo>
          <LogoImage src={logo} alt="logo" />
        </Logo>
      </HomeLink>
    </Left>
    <Nav>
      <DesktopOnly>
        <NavBar />
      </DesktopOnly>
      <MobileOnly>
        <Hamburger>
          <NavBar vertical />
        </Hamburger>
      </MobileOnly>
    </Nav>
  </Header>
);
