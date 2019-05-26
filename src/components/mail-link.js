import React from "react";

const MailLink = ({ mail }) => (
  <a className="mail_link" href={`mailto:${mail}`}>
    {mail}
  </a>
);

export default MailLink;
