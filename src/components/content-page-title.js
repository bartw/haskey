import React from "react";
import styled from "styled-components";

const ContentPageTitle = styled.h1`
  font-size: 2em;
`;

export default ({ children }) => (
  <ContentPageTitle>{children}</ContentPageTitle>
);
