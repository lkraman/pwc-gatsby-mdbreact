import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Home</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Menu</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Takeout</a>
            </h6>
          </MDBCol>

          <MDBCol md="2" className="b-3">
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Locations</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/kennettsquare">
                  Kennett Square, PA
                </MDBDropdownItem>
                <MDBDropdownItem href="/pikecreek">
                  Pike Creek, DE <br />
                  (coming soon!)
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />

        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <MDBIcon
                fab
                icon="facebook-f"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>

              <MDBIcon
                fab
                icon="instagram"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>

              <MDBIcon
                fab
                icon="google-plus-g"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>

              <MDBIcon
                fab
                icon="yelp"
                size="lg"
                className="mx-2 white-text mr-md-4"
              ></MDBIcon>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://cafeamericana.net" alt="">
            {" "}
            Cafe Americana{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
