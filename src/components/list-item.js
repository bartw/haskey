import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StyledListItem = styled.li`
  display: flex;
  line-height: 1.25em;
`;

export default ({ children }) => (
  <StyledListItem>
    <FontAwesomeIcon icon={faCheck} fixedWidth />
    <span>{children}</span>
  </StyledListItem>
);
