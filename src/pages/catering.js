import React from "react";
import "../components/layout.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBBtn
} from "mdbreact";

export const CateringPage = () => (
  <Layout pageInfo={{ pageName: "catering" }}>
    <SEO title="Cafe Americana Restaurant Catering" />
    <MDBContainer>
      <section className="my-5">
        <h2 className="contactHeader h1-responsive font-weight-bold text-center my-2">
          Contact Us
        </h2>
        <h5 className="text-center">Coming Soon!</h5>

        <p
          className="contactinfo text-center w-responsive mx-auto"
          style={{ fontSize: "1em" }}
        >
          Coming Soon to a new location conveniently located in Pike Creek,
          Delaware. Look for us on Limestone Rd. (Route 7) across from
          Goldey-Beacom College within the New Linden Hill Shoppes.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.050018643969!2d-75.69072238405892!3d39.73852727944977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701caba9296c3%3A0xffae73484237b821!2sLinden%20Hill%20Station!5e0!3m2!1sen!2sus!4v1569947087153!5m2!1sen!2sus"
                title="Cafe Americana Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating>
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p
                  className="contactinfo"
                  style={{
                    fontSize: "1em"
                  }}
                >
                  4500 New Linden Hill Rd.
                  <br />
                  Wilmington, De 19808
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating>
                  <MDBIcon icon="phone" />
                </MDBBtn>

                <p className="contactinfo mb-md-0" style={{ fontSize: "1em" }}>
                  (302) 543-7363
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating>
                  <MDBIcon icon="envelope" />
                </MDBBtn>

                <p className=" contactinfo mb-md-0" style={{ fontSize: "1em" }}>
                  <a
                    className="nav-link"
                    href="mailto:CMCK@cafeamericana.net"
                    style={{ fontSize: "1em", wordWrap: "break-word" }}
                  >
                    CMCK@cafeamericana.net
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <br />
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default CateringPage;
