import React from "react";
import { MDBContainer } from "mdbreact";

export const Layout = props => (
  <MDBContainer fluid>{props.children}</MDBContainer>
);
