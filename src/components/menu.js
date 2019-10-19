import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../global-style";
import ExternalLink from "../components/external-link";

const StyledMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 18px;
    top: 18px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colors.text};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${colors.text};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 30px !important;
    width: 36px !important;
    right: 18px !important;
    top: 14px !important;
  }

  .bm-cross-button > span {
    top: 0px !important;
    right: 21px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${colors.text};
    width: 6px !important;
    height: 32px !important;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${colors.background};
    padding: 60px 0 0 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${colors.text};
  }

  /* Wrapper for item list */
  .bm-item-list {
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    left: 0;
  }
`;

const StyledLink = styled(Link)`
  line-height: 20px;
  padding: 20px 80px 20px 10px;
  display: block;
  color: ${colors.text};

  &.active {
    background-color: ${colors.primary};
    color: ${colors.background};
  }

  :hover:not(.active) {
    color: ${colors.primary};
    background-color: ${colors.background};
  }
`;

const SocialContainer = styled.div`
  padding: 0 10px;
  margin-top: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.text};
  font-size: 1.5em;
  margin-right: 10px;
`;

export default () => (
  <StyledMenu>
    <Menu right width={"180px"}>
      <StyledLink to="/" activeClassName="active">
        Home
      </StyledLink>
      <StyledLink to="/trainingen/" activeClassName="active">
        Trainingen
      </StyledLink>
      <StyledLink to="/proberen/" activeClassName="active">
        Proberen
      </StyledLink>
      <StyledLink to="/inschrijven/" activeClassName="active">
        Inschrijven
      </StyledLink>
      <StyledLink to="/club/" activeClassName="active">
        Club
      </StyledLink>
      <SocialContainer>
        <ExternalLink
          to="https://www.facebook.com/haskeyhasselt/"
          label={<Icon icon={faFacebook} />}
        />
        <ExternalLink
          to="https://www.instagram.com/haskey_ijshockeyclub/"
          label={<Icon icon={faInstagram} />}
        />
      </SocialContainer>
    </Menu>
  </StyledMenu>
);
