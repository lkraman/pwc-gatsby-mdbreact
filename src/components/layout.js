import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main
      style={{
        flexGrow: 1
      }}
    >
      {children}
    </main>

    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
