import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import MailLink from "../components/mail-link";
import Boxes from "../components/boxes";
import Box from "../components/box";
import ExternalLink from "../components/external-link";

const Page = styled(Boxes)`
  line-height: 1.2em;
`;

const Title = styled.h1`
  font-size: 1.25em;
  line-height: 1.5em;
`;

const List = styled.ul`
  margin-top: 5px;
  list-style-type: disc;
  padding-left: 15px;
`;

const P = styled.p`
  margin-top: 5px;
`;

export default () => (
  <Layout>
    <SEO title="Club" />
    <PageTitle>Club</PageTitle>
    <Page>
      <Box>
        <Title>Adres ijsbaan</Title>
        <P>Sport Vlaanderen Hasselt</P>
        <p>Gouverneur Verwilghensingel 13</p>
        <p>3500 Hasselt</p>
      </Box>
      <Box>
        <Title>Administratief adres</Title>
        <P>IJshockeyclub Haskey Hasselt</P>
        <p>Turfstraat 2</p>
        <p>3600 Genk</p>
      </Box>
      <Box>
        <Title>Trooper</Title>
        <P>
          Door via de Trooperpagina van Haskey Hasselt naar een online shop te
          surfen, weten de online shops wie je wil steunen. Jij betaalt geen euro extra, maar voor
          elke aankoop ontvangen we een stevige percent om de clubkas te
          spijzen.
        </P>
        <p>
          <ExternalLink
            to="https://trooper.be/haskey"
            label="Haskey Hasselt op Trooper"
          />
        </p>
      </Box>
    </Page>
  </Layout>
);
