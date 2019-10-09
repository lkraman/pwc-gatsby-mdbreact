import React from "react";
import "../components/layout.css";
import filet from "../images/filet.jpg";
import french_toast_and_fruit from "../images/french_toast_and_fruit.jpg";
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  MDBContainer,
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
          We Cater
        </h2>
        <h5 className="text-center">No event too big or too small!</h5>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Why not enjoy your next event! Allow us cater to your guests while you
          relax knowing your event will be a huge success!
        </p>
        <br />

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img src={filet} alt="" className="img-fluid rounded z-depth-1" />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Customizable Menus</h5>
                <p className="grey-text">
                  Our menu is your menu! We customize your choices and portions
                  to accomodate your event.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">All events</h5>
                <p className="grey-text">Whether you need</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Header</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
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
                <h5 className="font-weight-bold mb-3">Header</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Header</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Header</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src={french_toast_and_fruit}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default CateringPage;
