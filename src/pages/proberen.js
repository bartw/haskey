import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";
import MailLink from "../components/mail-link";
import ListItem from "../components/list-item";
import styled from "styled-components";

const Pragraph = styled.p`
  line-height: 1.25em;
`;

export default () => (
  <Layout>
    <SEO title="Proberen" />
    <ContentPage title="Proberen">
      <Content title="Wat heb je nodig?">
        <ul>
          <ListItem>Schaatsen (of doorgeven welke maat je hebt)</ListItem>
          <ListItem>Helm (een fietshelm of skatehelm is goed)</ListItem>
          <ListItem>Handschoenen</ListItem>
          <ListItem>
            Elleboog en kniebescherming is niet verplicht maar wel handig
          </ListItem>
          <ListItem>
            Sportieve kleding, geen skipak want dat is veel te warm
          </ListItem>
        </ul>
      </Content>
      <Content title="Wanneer?">
        <Pragraph>
          Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:30 tot 09:30.
        </Pragraph>
        <Pragraph>
          Je kan best om 08:00 op de schaatsbaan zijn zodat je tijd hebt om je
          om te kleden en een stick te kiezen.
        </Pragraph>
      </Content>
      <Content title="Waar?">
        <Pragraph>Sport Vlaanderen Hasselt</Pragraph>
        <Pragraph>Gouverneur Verwilghensingel 13</Pragraph>
        <Pragraph>3500 Hasselt</Pragraph>
      </Content>
      <Content title="Hoe?">
        <Pragraph>
          Stuur een email naar <MailLink mail="proberen@haskeyhasselt.be" /> met
          daarin:
        </Pragraph>
        <ul>
          <ListItem>Je naam</ListItem>
          <ListItem>Je leeftijd</ListItem>
          <ListItem>Op welke datum je wil komen</ListItem>
          <ListItem>En je schoenmaat als je zelf geen schaatsen hebt</ListItem>
        </ul>
      </Content>
    </ContentPage>
  </Layout>
);
