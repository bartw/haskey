import React from "react";

const style = {
  textAlign: "left",
  padding: "15px 60px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.18)",
  backgroundColor: "#fafbfc",
};

const titleStyle = {
  fontSize: "1.25em",
  lineHeight: "1.5em",
};

const subtitleStyle = {
  fontSize: "1em",
  lineHeight: "1.25em",
};

export default ({ title, subtitle, children }) => (
  <>
    <style scoped>
      {`
    .box_container {
      display: inline-block;
      margin: 10px 20px 10px 0;
    }
    @media only screen and (max-width: 479px) {
      .box_container {
        display: block;
        margin: 10px 0;
      }
    }
      `}
    </style>
    <div className="box_container">
      <div style={style}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subtitleStyle}>{subtitle || <span>&nbsp;</span>}</h2>
        {children}
      </div>
    </div>
  </>
);
