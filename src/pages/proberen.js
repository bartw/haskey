import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCheck,
  faSkating,
} from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/page-layout";

const IconListItem = ({ icon, children }) => (
  <li className="mt-2 flex items-baseline">
    <FontAwesomeIcon icon={icon} fixedWidth className="mr-2 text-royal-500" />
    {children}
  </li>
);

const Where = () => (
  <section className="mb-6">
    <h3 className="font-semibold">Waar?</h3>
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
);

const Proberen = () => (
  <PageLayout title="Proberen">
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">Jeugd (tot 16 jaar)</h2>
      <section className="mb-6">
        <h3 className="font-semibold">Wat heb je nodig?</h3>
        <ul>
          <IconListItem icon={faCheck}>
            <span>Schaatsen (of doorgeven welke maat je hebt)</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Helm (een fietshelm of skatehelm is goed)</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Handschoenen</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>
              Elleboog en kniebescherming is niet verplicht maar wel handig
            </span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Sportieve kleding, geen skipak want dat is veel te warm</span>
          </IconListItem>
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="font-semibold">Wanneer?</h3>
        <p className="mt-2">
          Je mag GRATIS 3 maal een uur meetrainen op zondag van 08:45 tot 09:45.
        </p>
        <p className="mt-2">
          Je kan best om 08:15 op de schaatsbaan zijn zodat je tijd hebt om je
          om te kleden en een stick te kiezen.
        </p>
      </section>
      <Where />
      <section className="mb-6">
        <h3 className="font-semibold">Hoe?</h3>
        <p className="mt-2">
          Stuur een email naar{" "}
          <a
            className="text-royal-500"
            href="mailto:ijshockeyhasselt@gmail.com"
          >
            ijshockeyhasselt@gmail.com
          </a>{" "}
          met daarin:
        </p>
        <ul>
          <IconListItem icon={faCheck}>
            <span>Je naam</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Je leeftijd</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Op welke datum je wil komen</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <div>
              <span>Hoe goed je kan schaatsen:</span>
              <ul>
                <IconListItem icon={faSkating}>
                  <span className="mr-2 font-semibold">Beginner:</span> kan niet
                  schaatsen of enkel vooruit schaatsen
                </IconListItem>
                <IconListItem icon={faSkating}>
                  <span className="mr-2 font-semibold">Halfgevorderd: </span>kan
                  vooruit schaatsen, schaatsen op 1 been, bochten maken
                </IconListItem>
                <IconListItem icon={faSkating}>
                  <span className="mr-2 font-semibold">Gevorderd:</span> kan
                  remmen, overzetten, achteruit schaatsen, ...
                </IconListItem>
              </ul>
            </div>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>En je schoenmaat als je zelf geen schaatsen hebt</span>
          </IconListItem>
        </ul>
      </section>
    </div>
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">
        Volwassenen (vanaf 16 jaar)
      </h2>
      <section className="mb-6">
        <h3 className="font-semibold">Wat heb je nodig?</h3>
        <ul>
          <IconListItem icon={faCheck}>
            <span>Schaatsen</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Helm</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Handschoenen</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Elleboog en kniebescherming is verplicht</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Sportieve kleding</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>
              Indien je in het bezit bent van een ijshockey uitrusting, wordt
              deze aangeraden
            </span>
          </IconListItem>
        </ul>
      </section>
      <Where />
      <section className="mb-6">
        <h3 className="font-semibold">Hoe?</h3>
        <p className="mt-2">
          Stuur een email naar{" "}
          <a
            className="text-royal-500"
            href="mailto:ijshockeyhasselt@gmail.com"
          >
            ijshockeyhasselt@gmail.com
          </a>{" "}
          met daarin:
        </p>
        <ul>
          <IconListItem icon={faCheck}>
            <span>Je naam</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Je leeftijd</span>
          </IconListItem>
          <IconListItem icon={faCheck}>
            <span>Of je ervaring hebt met ijshockey</span>
          </IconListItem>
        </ul>
      </section>
    </div>
  </PageLayout>
);

export default Proberen;
