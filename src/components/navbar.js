import React, { Component } from "react";
import SEO from "../components/seo";
import CafeAmericana_logo_PAN_black1 from "../images/CafeAmericana_logo_PAN_black1.png";
import "../components/layout.css";
import CustomNavLink from "./customLink";
import { Link } from "gatsby";

import {
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
      <MDBNavbar
        color="mdb-color"
        opacity=".50"
        dark
        expand="md"
        style={{ marginBottom: ".1rem" }}
      >
        <Link to="/" style={{ marginRight: ".5rem" }}>
          <img
            src={CafeAmericana_logo_PAN_black1}
            type="image/svg"
            width="75"
            alt=""
          />
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/fullmenu">Menu</CustomNavLink>
            <CustomNavLink to="#!">Takeout</CustomNavLink>

            <MDBNavItem>
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
                      className="yelp-ic mr-5 white-text"
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

export default NavPage;
