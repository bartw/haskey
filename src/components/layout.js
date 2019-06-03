import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import SocialBar from "./social-bar";
import Footer from "./footer";
import "./reset.css";
import "./layout.css";

const style = {
  backgroundColor: "#ffffff",
  paddingTop: "40px",
  clear: "both",
  margin: "0 auto",
};

const Layout = ({ children }) => (
  <>
    <style scoped>
      {`
    main {
      width: 90%;
    }
    @media only screen and (max-width: 768px) {
      main {
        width: 100%;
      }
    }
      `}
    </style>
    <Header />
    <SocialBar />
    <main style={style}>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
