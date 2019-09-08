import styled from "styled-components";
import { colors } from "../global-style";
import media from "../media";

const Box = styled.div`
  margin-top: 20px;
  border-top: 4px solid ${colors.primary};
  background-color: ${colors.veryLightGray};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  padding: 10px 20px;
  min-height: 8em;
  min-width: 18em;

  ${media.phone`
    min-height: 6em;
    margin-right: 0;
  `}
`;

export const WrappingBox = styled(Box)`
  margin-right: 20px;
  
  ${media.phone`
    width: 100%;
  `}
`;

export default Box;
