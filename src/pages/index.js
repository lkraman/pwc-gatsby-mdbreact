import React, { Component } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Intro from '../components/mask'
import Carousel from '../components/carousel'

import SEO from '../components/seo'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SEO
          title="Home"
          keywords={[
            'B2B Liability Insurance',
            'Business Insurance',
            "Workman's Comp",
            'Health',
            'Life',
            'Insurance',
            'pennsylvania',
            'delaware',
            'kennett square',
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
