import React from "react";
import SEO from "../components/seo";

export const NoMatchPage = () => (
  <Layout pageInfo={{ pageName: "404" }}>
    <SEO title="404" />
    <div>
      <h2>Uh Oh!!!</h2>
      <p>Looks like you're lost...and hungry!</p>
    </div>
  </Layout>
);

export default NoMatchPage;
