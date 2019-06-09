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

const Nav = styled.nav`
  padding-top: 40px;
  clear: both;
`;

const SocialBar = styled.ul`
  list-style-type: none;
  width: 40%;
  margin: 0 auto;

  ${media.tablet`width: 60%;`}
  ${media.phone`width: 80%;`}
`;

const SocialBarItem = styled.li`
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

export default () => (
  <Nav>
    <SocialBar>
      <SocialBarItem>
        <Link href="/">
          <FontAwesomeIcon icon={faFacebook} fixedWidth />
        </Link>
      </SocialBarItem>
      <SocialBarItem>
        <Link href="/">
          <FontAwesomeIcon icon={faInstagram} fixedWidth />
        </Link>
      </SocialBarItem>
      <SocialBarItem>
        <Link href="/">
          <FontAwesomeIcon icon={faSnapchat} fixedWidth />
        </Link>
      </SocialBarItem>
      <SocialBarItem>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} fixedWidth />
        </Link>
      </SocialBarItem>
    </SocialBar>
  </Nav>
);
