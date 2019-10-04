import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      className="position-relative w-100 p-3"
      expand="md"
      style={{ marginTop: "10rem" }}
    >
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
              href="https://www.instagram.com/cafe_americana/"
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
      <div className="footer-copyright text-center py-6">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://cafeamericana.net" alt="">
          {" "}
          Cafe Americana{" "}
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
