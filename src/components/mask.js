import React from "react";
import {
  MDBContainer,
  MDBTooltip,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";
import cafeAmericana_horiz_white from "../images/cafeAmericana_horiz_white.svg";
import "./layout.css";
import { Link } from "gatsby";

const Intro = ({ children }) => {
  return (
    <MDBContainer
      style={{ marginTop: "10vh", marginBottom: "30vh" }}
      className="mask z-depth-0 w-100"
    >
      >
      <MDBRow className="justify-content-center">
        <MDBCol md="12" className="white-text text-center">
          <img
            src={cafeAmericana_horiz_white}
            type="image/svg"
            width="50%"
            alt=""
          />
          <hr className="hr-light my-3 w-75" />
          <br />
          <br />
          <MDBRow className="justify-content-center">
            <MDBCol md="3">
              <Link to="/fullmenu">
                <MDBBtn outline color="light-green" className="mb-5">
                  <MDBIcon icon="utensils" className="mr-3"></MDBIcon> View Menu
                </MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol md="3">
              {" "}
              {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer"> */}
              <MDBBtn outline color="light-green" className="mb-5">
                <MDBIcon icon="laptop" className="mr-3"></MDBIcon> Takeout{" "}
                <br />
                <span className="small">Coming soon!</span>
              </MDBBtn>
              {/* </a> */}
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Intro;
