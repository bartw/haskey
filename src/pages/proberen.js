import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Proberen" />
    <div className="content_container">
      <h1>Wat heb je nodig?</h1>
      <ul>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          <span>Schaatsen (of doorgeven welke maat je hebt)</span>
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          <span>Helm (een fietshelm of skatehelm is goed)</span>
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          <span>Handschoenen</span>
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          <span>
            Elleboog en kniebescherming is niet verplicht maar wel handig
          </span>
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          <span>Sportieve kleding, geen skipak want dat is veel te warm</span>
        </li>
      </ul>
    </div>
    <div className="content_container">
      <h1>Wanneer?</h1>
      <p>
        Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:30 tot 09:30.
      </p>
      <p>
        Je kan best om 08:00 op de schaatsbaan zijn zodat je tijd hebt om je om
        te kleden en een stick te kiezen.
      </p>
    </div>
    <div className="content_container">
      <h1>Waar</h1>
      <p>Sport Vlaanderen Hasselt</p>
      <p>Gouverneur Verwilghensingel 13</p>
      <p>3500 Hasselt</p>
    </div>
    <div className="content_container">
      <h1>Hoe?</h1>
      <p>
        Stuur een email naar{" "}
        <a className="mail_link" href="mailto:proberen@haskeyhasselt.be">
          proberen@haskeyhasselt.be
        </a>{" "}
        met daarin:
      </p>
      <ul>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          Je naam
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          Je leeftijd
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          Op welke datum je wil komen
        </li>
        <li>
          <FontAwesomeIcon className="list_item_icon" icon={faCheck} />
          En je schoenmaat als je zelf geen schaatsen hebt
        </li>
      </ul>
    </div>
  </Layout>
);
