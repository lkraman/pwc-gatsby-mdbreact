import React, { Component } from "react";
import cafeAmericana_horiz_white from "../images/cafeAmericana_horiz_white.svg";
import "./layout.css";
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
              src={{ cafeAmericana_horiz_white }}
              type="image/svg"
              width="100"
              alt=""
            />
          </Link>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <a className="navbar-links" to="/index">
                  Home
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="navbar-links" to="/about">
                  About
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="navbar-links" to="/menu">
                  Menu
                </a>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Locations</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-menu">
                    <MDBDropdownItem>
                      <a
                        className="dropdown-nav-link-kennett"
                        to="/kennettsquare"
                      >
                        Kennett Square, PA
                      </a>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <a className="dropdown-nav-link-pike" to="/pikecreek">
                        Pike Creek, DE
                      </a>
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
                        to="https://www.facebook.com/camckonly/"
                        className="nav-bar-social-media facebook-ic mr-3"
                        role="button"
                      >
                        <i className="fab fa-lg fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        to="https://www.g.page/cafeamericana/review"
                        className="instagram-ic mr-3"
                        role="button"
                      >
                        <i className="fab fa-lg fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        to="https://www.g.page/cafeamericana/review"
                        className="gplus-ic mr-3"
                        role="button"
                      >
                        <i className="fab fa-lg fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        to="https://www.yelp.com/biz/cafe-americana-kennett-square"
                        className="yelp-ic mr-3"
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
