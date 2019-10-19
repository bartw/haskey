import React from "react";
import styled from "styled-components";
import MailLink from "./mail-link";
import ExternalLink from "./external-link";

const Footer = styled.footer`
  height: 40px;
  min-height: 40px;
  display: flex;
  font-size: 0.75em;
  align-items: center;
`;

const FooterItem = styled.span`
  flex-grow: 1;
  text-align: center;
`;

export default () => (
  <Footer>
    <FooterItem>© {new Date().getFullYear()} Haskey Hasselt</FooterItem>
    <FooterItem>
      Contacteer ons op <MailLink mail="ijshockeyhasselt@gmail.com" />
    </FooterItem>
    <FooterItem>
      Lid van de <ExternalLink to="https://www.rbihf.be/" label="RBIHF" />
    </FooterItem>
  </Footer>
);
