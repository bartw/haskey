import React from "react";

const Free = () => (
  <div className="price">
    <span className="value">Gratis</span>
  </div>
);

const Price = ({ value }) => (
  <div className="price">
    {value < 0 && <span className="discount">-</span>}
    <span className="currency">€</span>
    <span className="value">{Math.abs(value)}</span>
  </div>
);

export default ({ value }) =>
  value === 0 ? <Free /> : <Price value={value} />;
