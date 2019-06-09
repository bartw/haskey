import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
import media from "../components/media";

const Header = styled.h1`
  font-size: 6em;
  font-weight: bold;

  ${media.tablet`font-size: 3em;`}
  ${media.phone`font-size: 3em;`}
`;

export default () => (
  <Layout>
    <Hero>
      <Header>Oeps,</Header>
      <Header>pagina niet gevonden.</Header>
    </Hero>
  </Layout>
);
