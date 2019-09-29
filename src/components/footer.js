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
       
              <MDBRow className="navbar-d-flex">
                <div className="text-center">
                  <ul className="navbar-list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/camckonly/"
                        className="nav-bar-social-media facebook-ic mr-3 white-text"
                        role="button"
                      >
                        <i className="fab fa-lg fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.g.page/cafeamericana/review"
                        className="instagram-ic mr-3 white-text"
                        role="button"
                      >
                        <i className="fab fa-lg fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.g.page/cafeamericana/review"
                        className="gplus-ic mr-3 white-text"
                        role="button"
                      >
                        <i className="fab fa-lg fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.yelp.com/biz/cafe-americana-kennett-square"
                        className="yelp-ic mr-3 white-text"
                        role="button"
                      >
                        <i className="fab fa-lg fab fa-yelp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
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
