import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import cafeAmericana_horiz_white from "../images/cafeAmericana_horiz_white.svg";
import "./layout.css";
import { Link } from "gatsby";

const Intro = ({ children }) => {
  return (
    <MDBContainer style={{ marginTop: "15vh", marginBottom: "50vh" }}>
      <MDBRow>
        <MDBCol md="12" className="white-text text-center">
          <img
            src={cafeAmericana_horiz_white}
            type="image/svg"
            width="50%"
            alt=""
          />
          <hr className="hr-light my-4 w-75" />
          <h4 className="subtext-header h4-responsive mt-2 mb-4">
            Enjoy our mouth watering
          </h4>
          <Link to="/fullmenu">
            <MDBBtn outline color="light-green" className="mb-5">
              <MDBIcon icon="utensils" className="mr-2"></MDBIcon> View Menu
            </MDBBtn>
          </Link>
          {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer"> */}
          <MDBBtn outline color="light-green" className="mb-5">
            <MDBIcon icon="laptop" className="mr-2"></MDBIcon> Takeout
          </MDBBtn>
          {/* </a> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Intro;
