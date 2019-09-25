import React from "react";
import kennettStoreFront from "../images/kennettStoreFront.jpg";

import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBBtn
} from "mdbreact";

export const KennettSquare = () => (
  <>
    <MDBContainer>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <p
          className="text-center w-responsive mx-auto"
          style={{ fontSize: "1rem" }}
        >
          Conveniently located in Kennett Square, PA with ample, well-lit
          parking, come join us for your next home-cooked meal!
        </p>
        <br />
        <MDBRow>
          <MDBCol lg="12">
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
            <MDBRow className="text-center">
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
                  CMCK@cafeamericana.net
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p
              className="h5 text-center mb-4"
              style={{ fontFamily: "Architects Daughter" }}
            >
              Write to us
            </p>
            <div className="grey-text" style={{ fontFamily: "roboto" }}>
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn className="send-border-color">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
          <br />
        </MDBCol>
        <MDBCol md="6">
          <p
            className="h5 text-center mb-1"
            style={{ fontFamily: "Architects Daughter" }}
          >
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
    </MDBContainer>
  </>
);

export default KennettSquare;
