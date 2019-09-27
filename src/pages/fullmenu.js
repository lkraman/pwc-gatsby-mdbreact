import React from "react";
import SEO from "../components/seo";
import "../components/layout.css";
import Layout from "../components/layout";
import ScrollToTop from "react-scroll-up";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBCardBody,
  MDBCardText
} from "mdbreact";

export const FullMenuPage = () => (
  <Layout pageInfo={{ pageName: "fullmenu" }}>
    <SEO title="Cafe Americana Kennett Square Menu" />
    <h2 className="text-center">Our Menu</h2>
    <p className="small text-center">
      (Prices subject to change. *Consuming raw or undercooked meats, poultry,
      seafood, shellfish, or eggs may increase your risk of foodborne illness,
      specially if you have certain medical conditions.)
    </p>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="#appetizers">
          Appetizers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#breakfast">
          Breakfast
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#lunch">
          Lunch
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#dinner">
          Dinner
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#kids-menu">
          Kids Menu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#specials">
          Specials
        </a>
      </li>
    </ul>
    {/* -------appetizers-------------- */}
    <hr />
    <h2 className="menupage-links text-center" id="appetizers">
      Appetizers
    </h2>
    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-70 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <br />
              <span className="float-right font-weight-bold">$11.99</span>
              <h6 className="menu-item">American Nachos</h6>
              <p className="menu-desc">
                {" "}
                American nachos chili or chicken tinga{" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Loaded Hummus</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
              <span className="float-right font-weight-bold">$12.99</span>
              <h6 className="menu-item">Shrimp Avocado</h6>
              <p className="menu-desc">
                {" "}
                Sauteed shrimp with tomato and avocado on open faced toast (4
                pieces per order){" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Spinach Queso Dip</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
              <span className="float-right font-weight-bold">$9.99</span>
              <h6 className="menu-item">Loaded Hummus</h6>
              <p className="menu-desc">
                {" "}
                Olives, tomato, and feta cheese served with bread{" "}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
    {/* -------appetizers-------------- */}
    <hr />
    <h2 className="menupage-links" id="breakfast">
      Breakfast
    </h2>

    <MDBRow className="d-flex p-2 justify-content-center">
      <div className="d-flex w-70 p-2 text-center">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <br />
              <h2 className="card_title">OMELETTES</h2>
              <p className="small">
                (Served with home fries and toast or English muffin)
              </p>
              <span className="float-right font-weight-bold">$6.99</span>
              <h6 className="menu-item">Cheese</h6>
              <span className="float-right font-weight-bold">$8.50</span>
              <h6 className="menu-item">Meat and Cheese</h6>
              <p className="menu-desc"> Choose one meat and one cheese </p>
              <span className="float-right font-weight-bold">$8.50</span>
              <h6 className="menu-item">Veggie and Cheese</h6>
              <p className="menu-desc"> Choose two veggies and a cheese </p>
              <span className="float-right font-weight-bold">$9.50</span>
              <h6 className="menu-item">Western</h6>
              <p className="menu-desc"> Green peppers, onion, ham, cheese </p>
              <span className="float-right font-weight-bold">$9.50</span>
              <h6 className="menu-item">Build Your Own</h6>
              <p className="menu-desc">
                {" "}
                Choose as many as you like from cheese, meat, and veggies{" "}
              </p>
              <br />

              {/* <div class="card" style={{ width: "100%" }}>
                <img class="card-img-top" src={heroImage} alt="Card cap1" />
                <div class="card-body">
                  <p class="card-text">This is a for demo. Will not use</p>
                </div>
              </div> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBRow>
    <ScrollToTop showUnder={160}>
      <MDBIcon far icon="arrow-alt-circle-up" />
    </ScrollToTop>
  </Layout>
);

export default FullMenuPage;
