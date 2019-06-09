import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "./media";

export const colors = {
  primary: "#266DD3",
  text: "#353535",
  gray: "#EAECF0",
  lightGray: "#D2D7DF",
  veryLightGray: "#FAFBFC",
  background: "#FFFFFF"
};

export default createGlobalStyle`
  ${reset}
  
  body {
    font-family: sans-serif;
    font-size: 16px;
    color: ${colors.text};

    ${media.tablet`font-size: 14px;`}
    ${media.phone`font-size: 12px;`}
  }

  a {
    text-decoration: none;
  }
`;
