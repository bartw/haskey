import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";
import MailLink from "../components/mail-link";

const ListItem = ({ children }) => (
  <li
    style={{
      display: "flex",
      lineHeight: "1.25em",
    }}
  >
    <FontAwesomeIcon
      style={{
        marginRight: "5px",
      }}
      icon={faCheck}
      fixedWidth
    />
    <span>{children}</span>
  </li>
);

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
        <p>
          Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:30 tot 09:30.
        </p>
        <p>
          Je kan best om 08:00 op de schaatsbaan zijn zodat je tijd hebt om je
          om te kleden en een stick te kiezen.
        </p>
      </Content>
      <Content title="Waar?">
        <p>Sport Vlaanderen Hasselt</p>
        <p>Gouverneur Verwilghensingel 13</p>
        <p>3500 Hasselt</p>
      </Content>
      <Content title="Hoe?">
        <p>
          Stuur een email naar <MailLink mail="proberen@haskeyhasselt.be" /> met
          daarin:
        </p>
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
