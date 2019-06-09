import React from "react";
import styled from "styled-components";
import media from "./media";

const Hero = styled.div`
  width: 60%;
  margin: 50px auto;
  text-align: center;

  ${media.tablet`
    width: 75%;
    margin: 50px auto;
  `}
  ${media.phone`
    width: 75%;
    margin: 50px auto;
  `}
`;

export default ({ children }) => <Hero>{children}</Hero>;
