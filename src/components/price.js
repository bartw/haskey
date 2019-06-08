import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 2em;
  line-height: 2.5em;
`;

const Discount = styled.span`
  color: hsla(0, 100%, 50%, 0.81);
`;

const Value = styled.span`
  font-weight: 300;
`;

const Currency = styled.span`
  font-size: 0.45em;
  vertical-align: super;
  font-weight: 400;
`;

const Free = () => (
  <StyledDiv>
    <Value>Gratis</Value>
  </StyledDiv>
);

const Price = ({ value }) => (
  <StyledDiv>
    {value < 0 && <Discount>-</Discount>}
    <Currency>€</Currency>
    <Value>{Math.abs(value)}</Value>
  </StyledDiv>
);

export default ({ value }) =>
  value === 0 ? <Free /> : <Price value={value} />;
