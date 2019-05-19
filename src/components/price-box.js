import React from "react";
import Box from "./box";
import Price from "./price";

export default ({ title, subtitle, value }) => (
  <Box title={title} subtitle={subtitle}>
    <Price value={value} />
  </Box>
);
