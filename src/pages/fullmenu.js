import React from "react";
import Layout from "../components/layout";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText
} from "mdbreact";

export const FullMenu = () => (
  <Layout>
    <h1 className="text-center">Our Menu</h1>
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
    <h1 className="menupage-links text-center" id="appetizers">
      Appetizers
    </h1>
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
  </Layout>
);

export default FullMenu;
