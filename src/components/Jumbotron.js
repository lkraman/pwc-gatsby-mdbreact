import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";
import styled from "styled-components";
import heroImage from "../images/heroImage.jpg";

const Styles = styled.div`
  .jumbo {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background: url(${heroImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #969696;
    height: 600px;
    z-index: -2;
  }

  #jumbo-overlay {
    background-color: #ffffff;
    opacity: 0.8;
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

export const Jumbotron = () => {
  return (
    <Styles>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron
            fluid
            style={{ padding: 0 }}
            className="jumbo"
            id="jumbo-overlay"
          >
            <MDBCol
              className="text-white text-center py-20 px-4 my-10"
              src={{ heroImage }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  Welcome to Cafe Americana
                </MDBCardTitle>
                <p className="h4-responsive mx-5 mb-5" font-bold="true">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam!
                </p>
                <MDBBtn outline color="light-green" className="mb-5">
                  <MDBIcon icon="utensils" className="mr-2"></MDBIcon> View Menu
                </MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </Styles>
  );
};

export default Jumbotron;
