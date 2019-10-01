import React, { Component } from "react";
import Layout from "../components/layout";
import Intro from "../components/mask";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `cafe americana`,
              `restaurant`,
              `19808`,
              `19348`,
              `19707`,
              `pennsylvania`,
              `delaware`,
              `kennett square`,
              `pike creek`,
              `breakfast`,
              `cafe`
            ]}
          />
          <Carousel />
          <Intro />
        </Layout>
      </>
    );
  }
}

export default App;
