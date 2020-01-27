import React from 'react';
import {
  MDBContainer,
  MDBTooltip,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdbreact';
import pwc_horizontal_logo from '../images/pwc_horizontal_logo.svg';
import './layout.css';
import { Link } from 'gatsby';

const Intro = ({ children }) => {
  return (
    <MDBContainer
      style={{ marginTop: '30vh', marginBottom: '40vh' }}
      className="mask z-depth-0 w-100"
    >
      >
      <MDBRow className="mask-box justify-content-center">
        <MDBCol md="12" className="white-text text-center">
          <img src={pwc_horizontal_logo} type="image/svg" width="100%" alt="" />
          <hr className="hr-light my-3 w-75" />

          <MDBRow className="justify-content-center">
            <MDBCol md="3">
              <Link to="/contact">
                <MDBBtn className="mask-button mb-1 justify-content-center">
                  <MDBIcon icon="phone" className=" mr-2"></MDBIcon>
                  Contact Us
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Intro;
