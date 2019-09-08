import React from "react";
import styled from "styled-components";
import { colors } from "../global-style";

const MailLink = styled.a`
  color: ${colors.primary};

  :visited {
    color: ${colors.primary};
  }

  :hover {
    color: ${colors.text};
  }
`;

export default ({ mail }) => (
  <MailLink href={`mailto:${mail}`}>{mail}</MailLink>
);
