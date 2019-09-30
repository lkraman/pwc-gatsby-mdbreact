import React from "react";
import "../components/layout.css";
import kennettStoreFront from "../images/kennettStoreFront.jpg";
import SEO from "../components/seo";
import Layout from "../components/layout";

import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBBtn
} from "mdbreact";

export const KennettSquarePage = () => (
  <Layout pageInfo={{ pageName: "kennettsquare" }}>
    <SEO title="Cafe Americana Restaurant Kennett Square, Pa" />
    <MDBContainer>
      <section className="my-5">
        <h2 className="contactHeader h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <p
          className="contactText text-center w-responsive mx-auto"
          style={{ fontSize: "1rem" }}
        >
          Conveniently located in Kennett Square, PA with ample, well-lit
          parking, come join us for your next home-cooked meal!
        </p>
        <br />
        <MDBRow>
          <MDBCol md="8">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.545481615192!2d-75.73343248462156!3d39.83960717943639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf57a5bbc1e46eb63!2sCafe%20Americana!5e0!3m2!1sen!2sus!4v1568214217767!5m2!1sen!2sus"
                title="Cafe Americana Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="contactText">
              <MDBCol md="4">
                <MDBBtn
                  tag="a"
                  floating
                  color="green"
                  className="light-green darken-3"
                >
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p
                  style={{
                    fontStyle: "Roboto",
                    fontSize: "1rem"
                  }}
                >
                  350 Scarlet Rd
                </p>
                <p className="mb-md-0" style={{ fontSize: "1rem" }}>
                  Kennett Square, PA 19348
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn
                  tag="a"
                  floating
                  color="green"
                  className="light-green darken-3"
                >
                  <MDBIcon icon="phone" />
                </MDBBtn>

                <p style={{ fontSize: "1rem" }}>(484) 731-4123</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn
                  tag="a"
                  floating
                  color="green"
                  className="light-green darken-3"
                >
                  <MDBIcon icon="envelope" />
                </MDBBtn>

                <p className="mb-md-0" style={{ fontSize: "1rem" }}>
                  <a className="nav-link" href="mailto:CMCK@cafeamericana.net">
                    CMCK@cafeamericana.net
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <br />

          <MDBCol md="4" style={{ fontStyle: "Architects Daughter" }}>
            <p className="hoursPhotoHeader h5 text-center mb-1">
              Hours of Operation:
            </p>
            <br />
            <div className="d-flex flex-column right">
              <MDBCardImage
                hover
                overlay="white-slight"
                className="rounded mx-auto d-block"
                src={kennettStoreFront}
                alt="cafe americana storefront photo"
              />
              <div className="p-2 col-example text-center">
                Mon - Sat: 7AM - 8PM
              </div>
              <div className="p-2 col-example text-center">Sun: 7AM - 4PM</div>
              <div className="p-2 col-example text-center">
                Please visit our FaceBook page for Holiday hours and inclement
                weather closings.
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default KennettSquarePage;
