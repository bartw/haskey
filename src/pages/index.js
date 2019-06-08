import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import media from "../components/media";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 6em;
  font-weight: bold;

  ${media.tablet`font-size: 4em;`}
  ${media.phone`font-size: 4em;`}
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Header>HASKEY</Header>
      <Header>HASSELT</Header>
    </Hero>
  </Layout>
);
