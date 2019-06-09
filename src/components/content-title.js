import React from "react";
import styled from "styled-components";

const ContentTitle = styled.h2`
  font-size: 1.5em;
`;

export default ({ children }) => (
  <ContentTitle style={{ fontSize: "1.5em" }}>{children}</ContentTitle>
);
