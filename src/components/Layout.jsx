/* eslint-disable react/prop-types */
import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
