import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";

const teams = [
  { team: "Rookies", sunday: "08:30 - 09:30" },
  { team: "Goalies", sunday: "08:30 - 09:30" },
  { team: "U8", wednesday: "17:00 - 18:00", sunday: "08:30 - 09:30" },
  { team: "U10", wednesday: "17:00 - 18:00", sunday: "08:30 - 09:30" },
  { team: "U12", wednesday: "17:00 - 18:00", thursday: "17:45 - 18:45" },
  { team: "U16", wednesday: "18:00 - 19:00", thursday: "17:45 - 18:45" },
  { team: "Divisie 2", tuesday: "20:45 - 21:45", thursday: "20:45 - 21:45" },
  { team: "Dinoz", monday: "20:45 - 21:45", thursday: "22:00 - 23:00" },
  { team: "Haskey OGs", wednesday: "22:00 - 23:00" },
];

export default () => {
  const rows = teams.map(
    ({
      team,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    }) => (
      <tr key={team}>
        <td>{team}</td>
        <td>{monday}</td>
        <td>{tuesday}</td>
        <td>{wednesday}</td>
        <td>{thursday}</td>
        <td>{friday}</td>
        <td>{saturday}</td>
        <td>{sunday}</td>
      </tr>
    )
  );
  return (
    <Layout>
      <SEO title="Trainingen" />
      <ContentPage title="Trainingen">
        <Content>
          <table>
            <thead>
              <tr>
                <th style={{ width: "16%" }}>Team</th>
                <th style={{ width: "13%" }}>Ma</th>
                <th style={{ width: "13%" }}>Di</th>
                <th style={{ width: "13%" }}>Wo</th>
                <th style={{ width: "13%" }}>Do</th>
                <th style={{ width: "7%" }}>Vr</th>
                <th style={{ width: "7%" }}>Za</th>
                <th style={{ width: "13%" }}>Zo</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </Content>
      </ContentPage>
    </Layout>
  );
};
