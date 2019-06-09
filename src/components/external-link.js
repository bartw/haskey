import React from "react";
import styled from "styled-components";
import { colors } from "./global-style";

const ExternalLink = styled.a`
  color: ${colors.primary};

  :visited {
    color: ${colors.primary};
  }

  :hover {
    color: ${colors.text};
  }
`;

export default ({ to, label }) => (
  <ExternalLink href={to}>{label}</ExternalLink>
);
