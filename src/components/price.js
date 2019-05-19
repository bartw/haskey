import React from "react";

export default ({ value }) => (
  <div className="price">
    {value < 0 && <span className="discount">-</span>}
    <span className="valuta">€</span>
    <span className="value">{Math.abs(value)}</span>
  </div>
);
