import React from "react";

const ReadHtmlRaw = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default ReadHtmlRaw;
