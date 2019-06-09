import React from "react";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import media from "../media";
import SocialBarItem from "./social-bar-item";

const SocialBar = styled.ul`
  padding-top: 40px;
  clear: both;
  list-style-type: none;
  width: 40%;
  margin: 0 auto;

  ${media.tablet`width: 60%;`}
  ${media.phone`width: 80%;`}
`;

export default () => (
  <SocialBar>
    <SocialBarItem to="/" icon={faFacebook} />
    <SocialBarItem to="/" icon={faInstagram} />
    <SocialBarItem to="/" icon={faSnapchat} />
    <SocialBarItem to="/" icon={faTwitter} />
  </SocialBar>
);
