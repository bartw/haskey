import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/page-title";
import Boxes from "../components/boxes"
import Box from "../components/box"

const Teams = Boxes;

const Team = Box;

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

export default () => {
  const {
    allContentfulTrainingen: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulTrainingen {
          edges {
            node {
              team
              tijd
            }
          }
        }
      }
    `
  );

  const trainingen = edges.reverse().map(({ node: { team, tijd } }) => (
    <Team key={team}>
      <Title>{team}</Title>
      {
        <Times>
          {tijd.map(time => (
            <Time key={time}>{time}</Time>
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
