import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import media from "../components/media";

const SocialBar = styled.ul`
  padding-top: 40px;
  clear: both;
  list-style-type: none;
  width: 40%;
  margin: 0 auto;

  ${media.tablet`width: 60%;`}
  ${media.phone`width: 80%;`}
`;

const Item = styled.li`
  float: left;
  font-size: 3em;
  width: 25%;
  text-align: center;

  ${media.phone`font-size: 2em;`}
`;

const Link = styled.a`
  display: block;
  color: #353535;

  :hover {
    color: #266dd3;
  }
`;

const SocialBarItem = ({ to, icon }) => (
  <Item>
    <Link href={to}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </Link>
  </Item>
);

export default () => (
  <SocialBar>
    <SocialBarItem to="/" icon={faFacebook} />
    <SocialBarItem to="/" icon={faInstagram} />
    <SocialBarItem to="/" icon={faSnapchat} />
    <SocialBarItem to="/" icon={faTwitter} />
  </SocialBar>
);
