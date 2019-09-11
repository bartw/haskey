import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import ExternalLink from "../components/external-link";
import Price from "../components/price";
import Boxes from "../components/boxes";
import { WrappingBox } from "../components/box";

const registrationForm = {
  url: "/forms/Haskey_Inschrijving 2019-2020.pdf",
  label: "Inschrijvingsformulier",
};
const internalRules = {
  url: "/forms/Haskey_Huishoudelijk reglement_2019-2020.pdf",
  label: "Huishoudelijk reglement",
};
const antiDopingStatement = {
  url: "/forms/Haskey_Antidopingverklaring.pdf",
  label: "Anti-dopingverklaring",
};
const medicalCertificateRbihf = {
  url: "https://www.rbihf.be/",
  label: "Medisch attest RBIHF",
};
const medicalCertificateDinoz = {
  url: "/forms/Haskey_Medisch Attest_DINOZ.pdf",
  label: "Medisch attest Dinoz",
};
const passport = { label: "Kopie identiteitskaart (voor en achter)" };
const passportOrKidsId = {
  label: "Kopie identiteitskaart/kids-id (voor en achter)",
};
const photograph = { label: "Pasfoto" };

const H1 = styled.h1`
  font-size: 1.5em;
  margin-top: 40px;
`;

const Plans = Boxes;

const Title = styled.h1`
  font-size: 1.25em;
  line-height: 1.5em;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  line-height: 1.25em;
`;

const Documents = styled.ul`
  margin-top: 5px;
  list-style-type: disc;
  padding-left: 15px;
  line-height: 1.2em;
`;

const Plan = ({ title, subtitle, value, forms }) => (
    <WrappingBox>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Price value={value} />
      {!!forms.length && <p>Benodigde documenten:</p>}
      <Documents>
        {forms.map(({ url, label }, index) => (
          <li key={index}>
            {url ? <ExternalLink to={url} label={label} /> : label}
          </li>
        ))}
      </Documents>
    </WrappingBox>
);

export default () => (
  <Layout>
    <SEO title="Inschrijven" />
    <PageTitle>Inschrijven</PageTitle>
    <div>
      <H1>Starters</H1>
      <Plans>
        <Plan
          title="Proberen"
          subtitle="3 maal op zondag"
          value={0}
          forms={[]}
        />
        <Plan
          title="Rookies"
          subtitle="1 training per week"
          value={250}
          forms={[
            registrationForm,
            internalRules,
            medicalCertificateRbihf,
            passportOrKidsId,
            photograph,
          ]}
        />
      </Plans>
    </div>
    <div>
      <H1>Competitie</H1>
      <Plans>
        <Plan
          title="&gt; 2009"
          subtitle="U8 &amp; U10"
          value={410}
          forms={[registrationForm, internalRules, medicalCertificateRbihf]}
        />
        <Plan
          title="2009 - 2008"
          subtitle="U12"
          value={465}
          forms={[registrationForm, internalRules, medicalCertificateRbihf]}
        />
        <Plan
          title="2007 - 2006"
          subtitle="U14"
          value={520}
          forms={[registrationForm, internalRules, medicalCertificateRbihf]}
        />
        <Plan
          title="2005 - 2004"
          subtitle="U16"
          value={550}
          forms={[
            registrationForm,
            internalRules,
            antiDopingStatement,
            medicalCertificateRbihf,
          ]}
        />
        <Plan
          title="Divisie 2"
          value={610}
          forms={[
            registrationForm,
            internalRules,
            antiDopingStatement,
            medicalCertificateRbihf,
          ]}
        />
      </Plans>
    </div>
    <div>
      <H1>Recreatief</H1>
      <Plans>
        <Plan
          title="Dinoz"
          value={485}
          forms={[
            registrationForm,
            internalRules,
            medicalCertificateDinoz,
            passport,
            photograph,
          ]}
        />
      </Plans>
    </div>
    <div>
      <H1>Kortingen</H1>
      <Plans>
        <Plan title="Goalies" value={-150} forms={[]} />
        <Plan
          title="Vanaf 2de gezinslid"
          subtitle="uitgezonderd rookies"
          value={-25}
          forms={[]}
        />
      </Plans>
    </div>
  </Layout>
);
