import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 2em;
`;

export default ({ children }) => <PageTitle>{children}</PageTitle>;