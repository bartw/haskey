import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "./media";

/*
light blue: 266DD3
dark blue: 242038
light blue: E7F0FF

very light gray: FAFBFC
light gray: EAECF0
medium light gray: D2D7DF
very dark gray: 353535
*/

export default createGlobalStyle`
  ${reset}
  
  body {
    font-family: sans-serif;
    font-size: 16px;
    color: #353535;

    ${media.tablet`font-size: 14px;`}
    ${media.phone`font-size: 12px;`}
  }

  a {
    text-decoration: none;
  }
`;