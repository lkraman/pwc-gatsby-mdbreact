import React, { Component } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Intro from '../components/mask'
import SEO from '../components/seo'
import Carousel from '../components/carousel'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SEO
          title="Home"
          keywords={[
            `cafe americana`,
            `restaurant`,
            `19808`,
            `19348`,
            `19707`,
            '19311'`pennsylvania`,
            `delaware`,
            `kennett square`,
            `pike creek`,
            `breakfast`,
            `cafe`,
          ]}
        />

        <Carousel />
        <Intro />
        <Footer />
      </>
    )
  }
}

export default App
