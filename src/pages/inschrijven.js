import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";
import PriceBox from "../components/price-box";

export default () => (
  <Layout>
    <SEO title="Inschrijven" />
    <ContentPage title="Inschrijven">
      <Content title="Starters">
        <PriceBox title="Proberen" subtitle="3 maal op zondag" value={0} />
        <PriceBox title="Rookies" subtitle="1 training per week" value={250} />
      </Content>
      <Content title="Competitie">
        <PriceBox title="&gt; 2009" subtitle="U8 &amp; U10" value={410} />
        <PriceBox title="2009 - 2008" subtitle="U12" value={465} />
        <PriceBox title="2007 - 2006" subtitle="U14" value={520} />
        <PriceBox title="2007 - 2006" subtitle="U14" value={520} />
        <PriceBox title="2005 - 2004" subtitle="U16" value={550} />
        <PriceBox title="Divisie 2" value={610} />
        <PriceBox title="Dinoz" value={485} />
      </Content>
      <Content title="Kortingen">
        <PriceBox title="Goalies" value={-150} />
        <PriceBox
          title="Vanaf 2de gezinslid"
          subtitle="uitgezonderd rookies"
          value={-25}
        />
      </Content>
    </ContentPage>
  </Layout>
);
