import React from "react";
import ContentPageTitle from './content-page-title';

const style = {
  margin: "0 10px",
};

const contentStyle = {
  marginTop: "10px",
};

const ContentPage = ({ children, title }) => (
  <div style={style}>
    <ContentPageTitle>{title}</ContentPageTitle>
    <div style={contentStyle}>{children}</div>
  </div>
);

export default ContentPage;
