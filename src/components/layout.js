import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "./global-style";
import Header from "./header";
import SocialBar from "./social-bar";
import Footer from "./footer";
import media from "./media";
import { colors } from "./global-style";

const Main = styled.main`
  background-color: ${colors.background};
  padding-top: 40px;
  clear: both;
  margin: 0 auto;
  width: 90%;

  ${media.tablet`width: 100%;`}
  ${media.phone`width: 100%;`}
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <SocialBar />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
