import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import media from "../media";
import { colors } from "../global-style";

const Item = styled.li`
  float: left;
  font-size: 3em;
  width: 25%;
  text-align: center;

  ${media.phone`font-size: 2em;`}
`;

const Link = styled.a`
  display: block;
  color: ${colors.text};

  :hover {
    color: ${colors.primary};
  }
`;

export default ({ to, icon }) => (
  <Item>
    <Link href={to}>
      <FontAwesomeIcon icon={icon} fixedWidth />
    </Link>
  </Item>
);
