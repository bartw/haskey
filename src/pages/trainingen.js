import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Boxes from "../components/boxes";
import { WrappingBox } from "../components/box";

const Teams = Boxes;

const Team = WrappingBox;

const Times = styled.ul`
  margin-top: 20px;
  text-align: right;
  width: 50%;
  min-width: 50%;
`;

const Time = styled.li`
  margin-top: 5px;
`;

const Title = styled.h1`
  font-size: 1.25em;
  line-height: 1.5em;
`;

const teams = [
  { team: "Rookies", practices: [{ day: "ZO", time: "08:30 - 09:30" }] },
  { team: "Goalies", practices: [{ day: "ZO", time: "08:30 - 09:30" }] },
  {
    team: "U8",
    practices: [
      { day: "WO", time: "17:00 - 18:00" },
      { day: "ZO", time: "08:30 - 09:30" },
    ],
  },
  {
    team: "U10",
    practices: [
      { day: "WO", time: "17:00 - 18:00" },
      { day: "ZO", time: "08:30 - 09:30" },
    ],
  },
  {
    team: "U12",
    practices: [
      { day: "WO", time: "17:00 - 18:00" },
      { day: "DO", time: "17:45 - 18:45" },
    ],
  },
  {
    team: "U16",
    practices: [
      { day: "WO", time: "18:00 - 19:00" },
      { day: "DO", time: "17:45 - 18:45" },
    ],
  },
  {
    team: "Divisie 2",
    practices: [
      { day: "DI", time: "21:15 - 22:15" },
      { day: "DO", time: "20:45 - 21:45" },
    ],
  },
  {
    team: "Dinoz",
    practices: [
      { day: "MA", time: "21:15 - 22:15" },
      { day: "DO", time: "22:00 - 23:00" },
    ],
  },
  {
    team: "Haskey OGs",
    practices: [{ day: "WO", time: "22:15 - 23:15" }],
  },
];

export default () => {
  const trainingen = teams.map(({ team, practices }) => (
    <Team key={team}>
      <Title>{team}</Title>
      {
        <Times>
          {practices.map(({ day, time }) => (
            <Time key={day + time}>
              {day} {time}
            </Time>
          ))}
        </Times>
      }
    </Team>
  ));

  return (
    <Layout>
      <SEO title="Trainingen" />
      <PageTitle>Trainingen</PageTitle>
      <Teams>{trainingen}</Teams>
    </Layout>
  );
};
