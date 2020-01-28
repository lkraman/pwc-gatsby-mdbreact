import React from 'react';
import { MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

const Features = () => {
  return (
    <MDBContainer>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <MDBRow>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                <MDBIcon icon="utensils" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h4 className="font-weight-bold">Menu</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="danger" size="sm">
                  Visit Menu
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                <MDBIcon icon="user-friends" size="2x" className="green-text" />
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h4 className="font-weight-bold text-center">About Us</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="light-green" size="sm">
                  Learn More
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <MDBRow>
              <MDBCol lg="2" md="3" size="2">
                <MDBIcon icon="phone" size="2x" className="brown-text" />
              </MDBCol>
              <MDBCol lg="10" md="9" size="10">
                <h4 className="font-weight-bold">Contact Us</h4>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <MDBBtn color="brown" size="sm">
                  Contact Us
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default Features;
