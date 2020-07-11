import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import PageLayout from "../components/page-layout";

const Club = () => (
  <PageLayout title="Club">
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Adres ijsbaan</h2>
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
      <h2 className="text-lg font-semibold">Contact</h2>
      <ul>
        <li className="mt-2">
          <a href="mailto:ijshockeyhasselt@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth className="mr-2" />
            <span className="text-royal-500">ijshockeyhasselt@gmail.com</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.facebook.com/haskeyhasselt/">
            <FontAwesomeIcon icon={faFacebook} fixedWidth className="mr-2" />
            <span className="text-royal-500">Facebook</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.instagram.com/haskey_ijshockeyclub/">
            <FontAwesomeIcon icon={faInstagram} fixedWidth className="mr-2" />
            <span className="text-royal-500">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Aangifteformulieren verzekering</h2>
      <ul>
        <li className="mt-2">
          <a href="forms/RBIHF_ONGEVALSAANGIFTEFORMULIER.pdf">
            <FontAwesomeIcon icon={faFilePdf} fixedWidth className="mr-2" />
            <span className="text-royal-500">Aangifteformulier RBIHF</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="forms/DINOZ_ONGEVALSAANGIFTEFORMULIER.pdf">
            <FontAwesomeIcon icon={faFilePdf} fixedWidth className="mr-2" />
            <span className="text-royal-500">Aangifteformulier Dinoz</span>
          </a>
        </li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Trooper</h2>
      <p className="mt-2">
        Door via de Trooperpagina van Haskey Hasselt naar een online shop te
        surfen, weten de online shops wie je wil steunen. Jij betaalt geen euro
        extra, maar voor elke aankoop ontvangen we een stevige percent om de
        clubkas te spijzen.
      </p>
      <div className="mt-2">
        <a href="https://trooper.be/haskey">
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            fixedWidth
            className="mr-2"
          />
          <span className="text-royal-500">Haskey Hasselt op Trooper</span>
        </a>
      </div>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Mutualiteit</h2>
      <p className="mt-2">
        Verschillende mutualiteiten zorgen voor een financiële tussenkomst
        wanneer je een lidmaatschap bij een sportaanbieder afsluit.
      </p>
      <ul>
        <li className="mt-2">
          <a href="https://www.cm.be/diensten-en-voordelen/vakantie-en-vrije-tijd/sport/sportvereniging">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">CM</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.fsmb.be/sport-of-fitnessclub">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">Socialistische Mutualiteit</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.lm.be/lmplus/rubrieken/voordelen-en-diensten/sport-en-beweging/sportprikkel/pages/sportprikkel.aspx">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">LM Plus</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.oz.be/vitaliteit/voordelen/fitness-sportclub">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">OZ</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.vnz.be/voordelen-terugbetalingen/sport-fitnessclub/">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">VNZ</span>
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.partena-ziekenfonds.be/nl/ziekenfonds-en-voordelen/voordelen-en-terugbetalingen/sportclub-lidgeld">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              fixedWidth
              className="mr-2"
            />
            <span className="text-royal-500">Partena</span>
          </a>
        </li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Administratief adres</h2>
      <address className="mt-2 not-italic">
        <div>IJshockeyclub Haskey Hasselt</div>
        <div>Singelbeekstraat 71</div>
        <div>3500 Hasselt</div>
      </address>
    </section>
  </PageLayout>
);

export default Club;
