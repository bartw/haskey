import React from "react";
import ContentTitle from "./content-title";

const style = {
  marginTop: "20px",
};

const contentStyle = {
  marginTop: "10px",
};

const Content = ({ children, className, title }) => (
  <div style={style} className={className}>
    {title && <ContentTitle>{title}</ContentTitle>}
    <div style={contentStyle}>{children}</div>
  </div>
);

export default Content;
