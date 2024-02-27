import React from "react";
import { Helmet } from "react-helmet";

const Page2 = () => {
  return (
    <div>
      <Helmet>
        <title>PAGE 2</title>
        <meta property="description" content="description test p2" />
        <meta property="key" content="key1,key2,p21,p222" />
      </Helmet>
      <span>PAGE 2</span>
    </div>
  );
};

export default Page2;
