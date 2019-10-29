import React from "react";
import "../components/layout.css";
import steak_and_wine from "../images/steak_and_wine.jpg";
import serving_dishes1 from "../images/serving_dishes1.jpg";
import Layout from "../components/layout";
import ContactFormPage from "../components/contactForm";
import SEO from "../components/seo";

import {
  MDBContainer,
  MDBRow,
  MDBView,
  MDBCol,
  MDBMask,
  MDBBtn,
  MDBIcon,
  Animation
} from "mdbreact";

export const CateringPage = () => (
  <Layout pageInfo={{ pageName: "catering" }}>
    <SEO title="Cafe Americana Restaurant Catering" />
    <MDBContainer>
      <section className="my-5">
        <h2 className="contactHeader h1-responsive font-weight-bold text-center my-2">
          We Cater
        </h2>
        <h5 className="text-center">No event too big or too small!</h5>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Allow us cater to your guests while you relax knowing your event will
          be a huge success!
        </p>
        <br />

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <MDBView>
              <img
                src={steak_and_wine}
                alt=""
                className="img-fluid rounded z-depth-1"
              />
              <MDBMask
                overlay="stylish-light"
                className="flex-center"
              ></MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Unique and Personal</h5>
                <p className="grey-text">
                  Every event is different. We will treat your event as an
                  extension of ourselves. There is not template. We will help
                  you craft the foods to create your distinctive style.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Any Size Event</h5>
                <p className="grey-text">
                  Whether it's your next business meeting or your upcoming
                  wedding...we've got you covered!
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Customizable Menus</h5>
                <p className="grey-text">
                  Our menu is your menu! We customize your choices and portions
                  to accomodate your next event.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />

        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3 text-center">
                  Contact Us
                </h5>
                <p className="grey-text">
                  Every event is different. We treat your event as an extension
                  of ourselves. You receive a unique and fully customizable
                  experience. We help you craft the ultimate culinary experience
                  to create your distinctive style.
                </p>
                <div className="col text-center">
                  <MDBBtn
                    className="catering-button mb-4 justify-content-center"
                    href="mailto:catering@cafeamericana.net"
                  >
                    <MDBIcon icon="paper-plane" className=" mr-3" /> Email Us
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView>
              <img
                src={serving_dishes1}
                alt=""
                className="img-fluid rounded z-depth-1"
              />
              <MDBMask
                overlay="stylish-light"
                className="flex-center"
              ></MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default CateringPage;
