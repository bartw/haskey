import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colors } from "./global-style";

const Icon = styled.div`
  font-size: 3em;
  padding: 10px;
`;

const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  text-align: right;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  border-top: 4px solid ${colors.primary};
`;

const Menu = styled.div`
  float: right;
  background-color: white;
  height: 100%;
`;

const Toggle = styled.label`
  cursor: pointer;

  & input ~ ${MenuContainer} {
    display: none;
  }

  & input:checked ~ ${Icon} {
    display: none;
  }

  & input:checked ~ ${MenuContainer} {
    display: block;
  }
`;
export default ({ children }) => (
  <Toggle>
    <input type="checkbox" style={{ display: "none" }} />
    <Icon>
      <FontAwesomeIcon icon={faBars} fixedWidth />
    </Icon>
    <MenuContainer>
      <Menu>
        <Icon>
          <FontAwesomeIcon icon={faTimes} fixedWidth />
        </Icon>
        <div>{children}</div>
      </Menu>
    </MenuContainer>
  </Toggle>
);
