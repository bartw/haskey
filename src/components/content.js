import React from "react";
import styled from "styled-components";
import ContentTitle from "./content-title";

const Container = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  margin-top: 10px;
`;

export default ({ children, title }) => (
  <Container>
    {title && <ContentTitle>{title}</ContentTitle>}
    <Content>{children}</Content>
  </Container>
);
