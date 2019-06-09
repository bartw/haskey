import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./header";
import SocialBar from "./social-bar";
import Footer from "./footer";
import media from "./media";
import "./reset.css";
import "./layout.css";

const Main = styled.main`
  background-color: #ffffff;
  padding-top: 40px;
  clear: both;
  margin: 0 auto;
  width: 90%;

  ${media.tablet`width: 100%;`}
  ${media.phone`width: 100%;`}
`;

const Layout = ({ children }) => (
  <>
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
