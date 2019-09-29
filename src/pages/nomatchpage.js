import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const NoMatchPage = () => (
  <Layout pageInfo={{ pageName: "nomatchpage" }}>
    <SEO title="404" />
    <div>
      <h2>Uh Oh!!!</h2>
      <p>Looks like you're lost...and hungry!</p>
    </div>
  </Layout>
);

export default NoMatchPage;
