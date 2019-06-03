import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = () => (
  <nav>
    <ul className="social_bar">
      <li className="social_bar_item">
        <a className="social_bar_item_link" href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li className="social_bar_item">
        <a className="social_bar_item_link" href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li className="social_bar_item">
        <a className="social_bar_item_link" href="/">
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
      </li>
      <li className="social_bar_item">
        <a className="social_bar_item_link" href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialBar;
