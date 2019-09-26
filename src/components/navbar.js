import React, { Component } from "react";
import cafeAmericana_horiz_white from "../images/cafeAmericana_horiz_white.svg";
import "../components/layout.css";
import CustomNavLink from "./customLink";
import { Link } from "gatsby";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow
} from "mdbreact";

class NavPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBNavbar
          color="mdb-color"
          dark
          expand="md"
          style={{ marginBottom: ".1rem" }}
        >
          <Link to="/">
            <img
              src={cafeAmericana_horiz_white}
              type="image/svg"
              width="100"
              alt=""
            />
          </Link>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <CustomNavLink to="#!">Home</CustomNavLink>
              <CustomNavLink to="/fullmenu">Menu</CustomNavLink>
              <CustomNavLink to="#!">Order Online</CustomNavLink>
              <CustomNavLink to="#!">Contact</CustomNavLink>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Locations</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">
                      Kennett Square, PA
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Pike Creek, DE <br />
                      (coming soon!)
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBRow className="navbar-d-flex">
                <div className="text-right">
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
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default NavPage;
