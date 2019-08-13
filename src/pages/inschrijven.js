import React from "react";
import styled from "styled-components";
import media from "../components/media";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";
import RegistrationBox from "../components/registration-box";

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.phone`
    display: block;
  `}
`;

export default () => (
  <Layout>
    <SEO title="Inschrijven" />
    <ContentPage title="Inschrijven">
      <Content title="Starters">
        <Container>
          <RegistrationBox
            title="Proberen"
            subtitle="3 maal op zondag"
            value={0}
          />
          <RegistrationBox
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
        </Container>
      </Content>
      <Content title="Competitie">
        <Container>
          <RegistrationBox
            title="&gt; 2009"
            subtitle="U8 &amp; U10"
            value={410}
            forms={[registrationForm, internalRules, medicalCertificateRbihf]}
          />
          <RegistrationBox
            title="2009 - 2008"
            subtitle="U12"
            value={465}
            forms={[registrationForm, internalRules, medicalCertificateRbihf]}
          />
          <RegistrationBox
            title="2007 - 2006"
            subtitle="U14"
            value={520}
            forms={[registrationForm, internalRules, medicalCertificateRbihf]}
          />
          <RegistrationBox
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
          <RegistrationBox
            title="Divisie 3"
            value={610}
            forms={[
              registrationForm,
              internalRules,
              antiDopingStatement,
              medicalCertificateRbihf,
            ]}
          />
        </Container>
      </Content>
      <Content title="Recreatief">
        <Container>
          <RegistrationBox
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
        </Container>
      </Content>
      <Content title="Kortingen">
        <Container>
          <RegistrationBox title="Goalies" value={-150} />
          <RegistrationBox
            title="Vanaf 2de gezinslid"
            subtitle="uitgezonderd rookies"
            value={-25}
          />
        </Container>
      </Content>
    </ContentPage>
  </Layout>
);
