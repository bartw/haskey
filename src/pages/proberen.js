import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import MailLink from "../components/mail-link";
import Boxes from "../components/boxes"
import Box from "../components/box"

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
    <SEO title="Proberen" />
    <PageTitle>Proberen</PageTitle>
    <Page>
      <Box>
        <Title>Wat heb je nodig?</Title>
        <List>
          <li>Schaatsen (of doorgeven welke maat je hebt)</li>
          <li>Helm (een fietshelm of skatehelm is goed)</li>
          <li>Handschoenen</li>
          <li>Elleboog en kniebescherming is niet verplicht maar wel handig</li>
          <li>Sportieve kleding, geen skipak want dat is veel te warm</li>
        </List>
      </Box>
      <Box>
        <Title>Wanneer?</Title>
        <P>
          Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:30 tot 09:30.
        </P>
        <P>
          Je kan best om 08:00 op de schaatsbaan zijn zodat je tijd hebt om je
          om te kleden en een stick te kiezen.
        </P>
      </Box>
      <Box>
        <Title>Waar?</Title>
        <P>Sport Vlaanderen Hasselt</P>
        <p>Gouverneur Verwilghensingel 13</p>
        <p>3500 Hasselt</p>
      </Box>
      <Box>
        <Title>Hoe?</Title>
        <P>
          Stuur een email naar <MailLink mail="proberen@haskeyhasselt.be" /> met
          daarin:
        </P>
        <List>
          <li>Je naam</li>
          <li>Je leeftijd</li>
          <li>Op welke datum je wil komen</li>
          <li>En je schoenmaat als je zelf geen schaatsen hebt</li>
        </List>
      </Box>
    </Page>
  </Layout>
);
