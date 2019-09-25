import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-center">
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="6" lg="6" className="ml-lg-0">
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/camckonly/"
                    className="facebook-ic mr-3"
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

                {/* <li className="list-inline-item">
                  <href className="btn-floating btn-sm rgba-white-slight mx-1" />
                  <i className="fab fa-facebook-f" />
                </li>
                <li className="list-inline-item">
                  <href className="btn-floating btn-sm rgba-white-slight mx-1" />
                  <i className="fab fa-instagram" />
                </li>
                <li>
                  <a
                    href="https://www.g.page/cafeamericana/review"
                    class="gplus-ic mr-3"
                    role="button"
                  >
                    <i class="fab fa-lg fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <href className="btn-floating btn-sm rgba-white-slight mx-1" />
                  <i className="fab fa-yelp" />
                </li> */}
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center">
              <p className="footer-center">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.cafeamericana.net"> cafeamericana.net </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
