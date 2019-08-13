import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentPage from "../components/content-page";
import Content from "../components/content";
import media from "../components/media";
import { colors } from "../components/global-style";

const Table = styled.table`
  width: 100%;
`;

const Header = styled.th`
  text-transform: uppercase;
  text-align: left;
  background-color: ${colors.gray};
  padding: 15px 5px;
`;

const Row = styled.tr`
  border-top: 1px solid ${colors.lightGray};
`;

const HoverRow = styled(Row)`
  :hover {
    background-color: ${colors.veryLightGray};
  }
`;

const Cell = styled.td`
  padding: 15px 5px;

  ${media.phone`font-size: 0.9em;`}
`;

const teams = [
  { team: "Rookies", sunday: "08:30 - 09:30" },
  { team: "Goalies", sunday: "08:30 - 09:30" },
  { team: "U8", wednesday: "17:00 - 18:00", sunday: "08:30 - 09:30" },
  { team: "U10", wednesday: "17:00 - 18:00", sunday: "08:30 - 09:30" },
  { team: "U12", wednesday: "17:00 - 18:00", thursday: "17:45 - 18:45" },
  { team: "U16", wednesday: "18:00 - 19:00", thursday: "17:45 - 18:45" },
  { team: "Divisie 3", tuesday: "21:15 - 22:15", thursday: "20:45 - 21:45" },
  { team: "Dinoz", monday: "21:15 - 22:15", thursday: "22:00 - 23:00" },
  { team: "Haskey OGs", wednesday: "22:15 - 23:15" },
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
      <HoverRow key={team}>
        <Cell>{team}</Cell>
        <Cell>{monday}</Cell>
        <Cell>{tuesday}</Cell>
        <Cell>{wednesday}</Cell>
        <Cell>{thursday}</Cell>
        <Cell>{friday}</Cell>
        <Cell>{saturday}</Cell>
        <Cell>{sunday}</Cell>
      </HoverRow>
    )
  );
  return (
    <Layout>
      <SEO title="Trainingen" />
      <ContentPage title="Trainingen">
        <Content>
          <Table>
            <thead>
              <Row>
                <Header style={{ width: "16%" }}>Team</Header>
                <Header style={{ width: "13%" }}>Ma</Header>
                <Header style={{ width: "13%" }}>Di</Header>
                <Header style={{ width: "13%" }}>Wo</Header>
                <Header style={{ width: "13%" }}>Do</Header>
                <Header style={{ width: "7%" }}>Vr</Header>
                <Header style={{ width: "7%" }}>Za</Header>
                <Header style={{ width: "13%" }}>Zo</Header>
              </Row>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Content>
      </ContentPage>
    </Layout>
  );
};
