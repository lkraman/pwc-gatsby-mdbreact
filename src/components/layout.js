import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./layout.css";

const Layout = ({ children }) => (
  <div
    style={{
      height: "100%",

      display: "flex",
      flexDirection: "column"
    }}
  >
    <Navbar />
    <main
      style={{
        flexGrow: 1
      }}
    >
      {children}
    </main>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
