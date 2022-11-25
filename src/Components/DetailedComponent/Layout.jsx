import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
