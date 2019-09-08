import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle, { colors } from "../global-style";
import Header from "./header";
import Footer from "./footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Scroll = styled.div`
  flex-grow: 1;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 20px 10px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Scroll>
        <Main>{children}</Main>
        <Footer />
      </Scroll>
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
