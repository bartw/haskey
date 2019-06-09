import React from "react";
import styled from "styled-components";
import MailLink from "./mail-link";
import ExternalLink from "./external-link";
import media from "./media";

const Footer = styled.footer`
  padding-top: 40px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 0.75em;
  line-height: 1.25em;
`;

const Item = styled.span`
  ${media.phone`display: block;`}
`;

const Divider = styled.span`
  margin: 0 5px;

  ${media.phone`display: none;`}
`;

export default () => (
  <Footer>
    <Item>© 2019 Haskey</Item>
    <Divider>|</Divider>
    <Item>
      Contacteer ons op <MailLink mail="info@haskeyhasselt.be" />
    </Item>
    <Divider>|</Divider>
    <Item>
      Lid van de <ExternalLink to="https://www.rbihf.be/" label="RBIHF" />
    </Item>
  </Footer>
);
