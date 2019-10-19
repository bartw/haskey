import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../global-style";
import media from "../media";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExternalLink from "../components/external-link";

const Hero = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 6em;
  font-weight: bold;

  ${media.phone`
    font-size: 5em;
  `}
`;

const SocialContainer = styled.div`
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.text};
  font-size: 4em;

  ${media.phone`
    font-size: 3em;
  `}
`;

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <H1>HASKEY</H1>
      <H1>HASSELT</H1>
      <SocialContainer>
        <ExternalLink
          to="https://www.facebook.com/haskeyhasselt/"
          label={<Icon icon={faFacebook} fixedWidth />}
        />
        <ExternalLink
          to="https://www.instagram.com/haskey_ijshockeyclub/"
          label={<Icon icon={faInstagram} fixedWidth />}
        />
      </SocialContainer>
    </Hero>
  </Layout>
);
