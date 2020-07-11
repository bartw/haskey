import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import haskeyLogo from "../images/haskey.svg";

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <main className="flex flex-col h-screen items-center justify-center">
      <img alt="haskey-logo" className="w-64" src={haskeyLogo} />
      <h1 className="uppercase text-4xl font-semibold text-center">
        Haskey Hasselt
      </h1>
    </main>
  </Layout>
);

export default Home;
