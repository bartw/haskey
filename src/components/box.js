import React from "react";
import styled from "styled-components";
import media from "./media";
import { colors } from "./global-style";

const BoxContainer = styled.div`
  display: flex;
  margin: 10px 20px 10px 0;

  ${media.phone`
    display: block;
    margin: 10px 0;
  `}
`;

const Box = styled.div`
  text-align: left;
  padding: 15px 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  background-color: ${colors.veryLightGray};
`;

const Title = styled.h1`
  font-size: 1.25em;
  line-height: 1.5em;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  line-height: 1.25em;
`;

export default ({ title, subtitle, children }) => (
  <BoxContainer>
    <Box>
      <Title>{title}</Title>
      <Subtitle>{subtitle || <span>&nbsp;</span>}</Subtitle>
      {children}
    </Box>
  </BoxContainer>
);
