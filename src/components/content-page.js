import React from "react";
import styled from "styled-components";
import ContentPageTitle from "./content-page-title";

const ContentPage = styled.div`
  margin: 0 10px;
`;

const Content = styled.div`
  margin-top: 10px;
`;

export default ({ children, title }) => (
  <ContentPage>
    <ContentPageTitle>{title}</ContentPageTitle>
    <Content>{children}</Content>
  </ContentPage>
);
