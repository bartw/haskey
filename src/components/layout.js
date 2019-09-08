import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle, {colors} from "../global-style";
import Header from "./header";
import Footer from "./footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: scroll;
  padding: 20px 10px;
  background-color: ${colors.background}
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
