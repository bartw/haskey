import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/page-layout";

const Proberen = () => (
  <PageLayout title="Proberen">
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Wat heb je nodig?</h2>
      <ul>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Schaatsen (of doorgeven welke maat je hebt)</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Helm (een fietshelm of skatehelm is goed)</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Handschoenen</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>
            Elleboog en kniebescherming is niet verplicht maar wel handig
          </span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Sportieve kleding, geen skipak want dat is veel te warm</span>
        </li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Wanneer?</h2>
      <p className="mt-2">
        Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:45 tot 09:45.
      </p>
      <p className="mt-2">
        Je kan best om 08:15 op de schaatsbaan zijn zodat je tijd hebt om je om
        te kleden en een stick te kiezen.
      </p>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Waar?</h2>
      <address className="mt-2 not-italic flex items-baseline">
        <a
          className="mr-2 text-royal-500"
          href="https://goo.gl/maps/GktRr6GKENapuHB37"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a>
        <div>
          <div>Sport Vlaanderen Hasselt</div>
          <div>Gouverneur Verwilghensingel 13</div>
          <div>3500 Hasselt</div>
        </div>
      </address>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Hoe?</h2>
      <p className="mt-2">
        Stuur een email naar{" "}
        <a className="text-royal-500" href="mailto:ijshockeyhasselt@gmail.com">
          ijshockeyhasselt@gmail.com
        </a>{" "}
        met daarin:
      </p>
      <ul>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Je naam</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Je leeftijd</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>Op welke datum je wil komen</span>
        </li>
        <li className="mt-2 flex items-baseline">
          <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-2 text-royal-500" />
          <span>En je schoenmaat als je zelf geen schaatsen hebt</span>
        </li>
      </ul>
    </section>
  </PageLayout>
);

export default Proberen;
