import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import SEO from "./seo";
import Layout from "./layout";
import haskeyLogo from "../images/haskey.svg";

const PageLayout = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    <header className="flex p-2 sm:p-4">
      <Link to="/">
        <img
          alt="haskey-logo"
          className="w-20 mr-4 md:w-24 md:mr-6 lg:w-32 lg:mr-8"
          src={haskeyLogo}
        />
      </Link>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
    <main className="mt-16 p-2 sm:p-4 min-h-screen">{children}</main>
    <footer className="mt-8 px-8 pt-8 pb-12 bg-royal-900 text-royal-100">
      <div className="flex justify-center text-xl">
        <a className="mx-4" href="mailto:ijshockeyhasselt@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a className="mx-4" href="https://www.facebook.com/haskeyhasselt/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="mx-4"
          href="https://www.instagram.com/haskey_ijshockeyclub/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="mt-4 text-center text-sm">
        © 1972 - 2020 Haskey Hasselt
      </div>
    </footer>
  </Layout>
);

export default PageLayout;
