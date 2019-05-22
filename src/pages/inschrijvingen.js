import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PriceBox from "../components/price-box";

export default () => (
  <Layout>
    <SEO title="Inschrijvingen" />
    <div className="box_container">
      <h1>Starters</h1>
      <PriceBox title="Proberen" subtitle="3 maal op zondag" value={0} />
      <PriceBox title="Rookies" subtitle="1 training per week" value={250} />
    </div>
    <div className="box_container">
    <h1>Competitie</h1>
      <PriceBox title="&gt; 2009" subtitle="U8 &amp; U10" value={410} />
      <PriceBox title="2009 - 2008" subtitle="U12" value={465} />
      <PriceBox title="2007 - 2006" subtitle="U14" value={520} />
      <PriceBox title="2007 - 2006" subtitle="U14" value={520} />
      <PriceBox title="2005 - 2004" subtitle="U16" value={550} />
      <PriceBox title="Divisie 2" value={610} />
      <PriceBox title="Dinoz" value={485} />
    </div>
    <div className="box_container">
    <h1>Kortingen</h1>
      <PriceBox title="Goalies" value={-150} />
      <PriceBox
        title="Vanaf 2de gezinslid"
        subtitle="uitgezonderd rookies"
        value={-25}
      />
    </div>
  </Layout>
);
