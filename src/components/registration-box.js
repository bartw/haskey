import React from "react";
import styled from "styled-components";
import Box from "./box";
import Price from "./price";
import ListItem from "./list-item";

const Paragraph = styled.p`
  padding-bottom: 5px;
`;

export default ({ title, subtitle, value, forms }) => {
  const listItems = forms
    ? forms.map((form, index) => <ListItem key={index}>{form}</ListItem>)
    : null;
  return (
    <Box title={title} subtitle={subtitle}>
      <Price value={value} />
      {forms && (
        <div>
          <Paragraph>Benodigde documenten:</Paragraph>
          <ul>{listItems}</ul>
        </div>
      )}
    </Box>
  );
};
