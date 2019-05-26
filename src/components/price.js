import React from "react";

const style = {
  fontSize: "2em",
  lineHeight: "2.5em",
};

const valueStyle = {
  fontWeight: 300,
};

const discountStyle = {
  color: "hsla(0, 100%, 50%, 0.81)",
};

const currencyStyle = {
  fontSize: "0.45em",
  verticalAlign: "super",
  fontWeight: 400,
};

const Free = () => (
  <div style={style}>
    <span style={valueStyle}>Gratis</span>
  </div>
);

const Price = ({ value }) => (
  <div style={style}>
    {value < 0 && <span style={discountStyle}>-</span>}
    <span style={currencyStyle}>€</span>
    <span style={valueStyle}>{Math.abs(value)}</span>
  </div>
);

export default ({ value }) =>
  value === 0 ? <Free /> : <Price value={value} />;
