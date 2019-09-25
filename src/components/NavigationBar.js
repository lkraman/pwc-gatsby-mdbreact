import React, { Component } from "react";
import cafeAmericana_horiz_white from "../assets/cafeAmericana_horiz_white.svg";
import "../pages/index.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow
} from "mdbreact";

export class NavigationBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        color="mdb-color"
        dark
        expand="md"
        style={{ marginBottom: ".1rem" }}
      >
        <MDBNavbarBrand href="/">
          <img src={cafeAmericana_horiz_white} width="" alt="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink className="navbar-links" to="/">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="navbar-links" to="/about">
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="navbar-links" to="/menu">
                Menu
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Locations</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-menu">
                  <MDBDropdownItem>
                    <MDBNavLink
                      className="dropdown-nav-link-kennett"
                      to="/kennettsquare"
                    >
                      Kennett Square, PA
                    </MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBNavLink
                      className="dropdown-nav-link-pike"
                      to="/pikecreek"
                    >
                      Pike Creek, DE
                    </MDBNavLink>
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
                      className="nav-bar-social-media facebook-ic mr-3"
                      role="button"
                    >
                      <i className="fab fa-lg fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.g.page/cafeamericana/review"
                      className="instagram-ic mr-3"
                      role="button"
                    >
                      <i className="fab fa-lg fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.g.page/cafeamericana/review"
                      className="gplus-ic mr-3"
                      role="button"
                    >
                      <i className="fab fa-lg fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.yelp.com/biz/cafe-americana-kennett-square"
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
    );
  }
}
