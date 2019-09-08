import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Box from "../components/box";
import ExternalLink from "../components/external-link";

const Page = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.2em;
  width: 100%;
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
        <Title>Aangifteformulieren verzekering</Title>
        <List>
          <li>
            <ExternalLink
              to="/forms/RBIHF_ONGEVALSAANGIFTEFORMULIER.pdf"
              label="Aangifteformulier RBIHF"
            />
          </li>
          <li>
            <ExternalLink
              to="/forms/DINOZ_ONGEVALSAANGIFTEFORMULIER.pdf"
              label="Aangifteformulier Dinoz"
            />
          </li>
        </List>
      </Box>
      <Box>
        <Title>Trooper</Title>
        <P>
          Door via de Trooperpagina van Haskey Hasselt naar een online shop te
          surfen, weten de online shops wie je wil steunen. Jij betaalt geen
          euro extra, maar voor elke aankoop ontvangen we een stevige percent om
          de clubkas te spijzen.
        </P>
        <p>
          <ExternalLink
            to="https://trooper.be/haskey"
            label="Haskey Hasselt op Trooper"
          />
        </p>
      </Box>
      <Box>
        <Title>Mutualiteit</Title>
        <P>
          Verschillende mutualiteiten zorgen voor een financiële tussenkomst
          wanneer je een lidmaatschap bij een sportaanbieder afsluit.
        </P>
        <List>
          <li>
            <ExternalLink
              to="https://www.cm.be/diensten-en-voordelen/vakantie-en-vrije-tijd/sport/sportvereniging"
              label="CM"
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.fsmb.be/sport-of-fitnessclub"
              label="Socialistische Mutualiteit"
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.lm.be/lmplus/rubrieken/voordelen-en-diensten/sport-en-beweging/sportprikkel/pages/sportprikkel.aspx"
              label="LM Plus"
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.oz.be/vitaliteit/voordelen/fitness-sportclub"
              label="OZ"
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.vnz.be/voordelen-terugbetalingen/sport-fitnessclub/"
              label="VNZ"
            />
          </li>
          <li>
            <ExternalLink
              to="https://www.partena-ziekenfonds.be/nl/ziekenfonds-en-voordelen/voordelen-en-terugbetalingen/sportclub-lidgeld"
              label="Partena"
            />
          </li>
        </List>
      </Box>
    </Page>
  </Layout>
);
