import React from "react";

export default ({ title, subtitle, children }) => (
  <div className="box">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle || <span>&nbsp;</span>}</div>
    {children}
  </div>
);
