import React from "react";
import styled from "styled-components";

const MailLink = styled.a`
  color: #266dd3;

  :visited {
    color: #266dd3;
  }

  :hover {
    color: #242038;
  }
`;

export default ({ mail }) => (
  <MailLink href={`mailto:${mail}`}>
    {mail}
  </MailLink>
);
