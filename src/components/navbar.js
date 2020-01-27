import React, { Component } from 'react';
import SEO from '../components/seo';
import pwc_horizontal_logo_v2 from '../images/pwc_horizontal_logo_v2.png';
import '../components/layout.css';

import CustomNavLink from './customLink';
import { Link } from 'gatsby';

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
} from 'mdbreact';

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
        dark
        expand="navbar navbar-expand-lg"
        style={{ marginBottom: '.1rem' }}
      >
        <Link
          to="/"
          className="white-text"
          style={{ marginLeft: '2rem', marginRight: '1rem' }}
        >
          <img
            src={pwc_horizontal_logo_v2}
            type="image/svg"
            width="200"
            alt=""
          />
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse5" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/services">Services</CustomNavLink>
            <CustomNavLink to="/contact">Contact Us</CustomNavLink>
          </MDBNavbarNav>

          <MDBNavbarNav float right>
            <MDBRow right style={{ marginLeft: '1rem', marginRight: '6rem' }}>
              <div className="text-right">
                <ul className="navbar-list-unstyled list-inline">
                  <li className="list-inline-item">
                    <MDBDropdown>
                      <MDBDropdownToggle mr-3 nav caret>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem
                          className="navbar-dropdown white-text"
                          href="tel:1-610-444-4750"
                          target="_blank"
                          rel="nofollow"
                          // style={{ paddingTop: '1.5rem' }}
                        >
                          (610) 444-4750
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                  <li className="list-inline-item">
                    <MDBDropdown>
                      <MDBDropdownToggle mr-3 nav caret>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem
                          className="navbar-dropdown white-text"
                          href="mailto:customer.service@pwcinsurancegroup.com"
                          target="_blank"
                          rel="nofollow"
                          // style={{ paddingTop: '1rem' }}
                        >
                          Contact Agent
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
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
