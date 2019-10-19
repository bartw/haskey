import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../global-style";
import media from "../media";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExternalLink from "../components/external-link";
import U12 from "../images/U12.jpg";
import U16 from "../images/U16.jpg";
import DIV2 from "../images/DIV2.jpg";

const photos = [
  { src: U12, label: "U12" },
  { src: U16, label: "U16" },
  { src: DIV2, label: "DIV2" },
];

const Hero = styled.div`
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
  margin-top: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.text};
  font-size: 4em;

  ${media.phone`
    font-size: 3em;
  `}
`;

const Photos = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 750px;
  margin-top: 25px;
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
    <Photos>
      {photos.map(({ src, label }, index) => (
        <div key={index}>
          <Photo src={src} alt={label} />
        </div>
      ))}
    </Photos>
  </Layout>
);
