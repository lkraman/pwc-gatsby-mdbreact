import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import heroImage from "../images/heroImage.jpg";

const Styles = styled.div`
.hero {
  margin-top: 10px;
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 400px;
    width: 100%
    position: relative;
    z-index: -2;
}

.hero-overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
.h1 {
  color: white;
}

.p {
  color: white;
}
}

`;

export const Hero = () => (
  <Styles>
    <Jumbotron fluid className="hero">
      <div className="hero-overlay-fluid"></div>
      <Container>
        <div className="hero-overlay-fluid"></div>
        <h1>Cafe Americana</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <button type="button" class="btn btn-light-green">
            Visit Menu
          </button>
        </p>
      </Container>
    </Jumbotron>
  </Styles>
);
