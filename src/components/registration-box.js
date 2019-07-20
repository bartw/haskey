import React from "react";
import Box from "./box";
import Price from "./price";
import ListItem from "./list-item";

export default ({ title, subtitle, value, forms }) => {
  const listItems = forms
    ? forms.map((form, index) => (
        <ListItem key={index}>
          {form}
        </ListItem>
      ))
    : null;
  return (
    <Box title={title} subtitle={subtitle}>
      <Price value={value} />
      {forms && (
        <div>
          <p>Benodigde documenten:</p>
          <ul>{listItems}</ul>
        </div>
      )}
    </Box>
  );
};
