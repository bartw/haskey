import styled from "styled-components";
import { colors } from "../global-style";
import media from "../media";

export default styled.div`
  margin-top: 20px;
  border-top: 4px solid ${colors.primary};
  background-color: ${colors.veryLightGray};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  padding: 10px 20px;
  min-height: 8em;
  min-width: 18em;
  margin-right: 20px;

  ${media.phone`
    min-height: 6em;
    width: 100%;
    margin-right: 0;
  `}
`;