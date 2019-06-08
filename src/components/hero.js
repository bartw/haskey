import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  width: 60%;
  margin: 50px auto;
  text-align: center;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 75%;
    margin: 50px auto;
  }

  @media only screen and (max-width: 479px) {
    width: 75%;
    margin: 50px auto;
  }
`;

export default ({ children }) => <Hero>{children}</Hero>;
