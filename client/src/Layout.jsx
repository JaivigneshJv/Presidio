import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="h-0.5 wid-screen border-b border-grey-100  relative top-20 "></div>
      {/* <div className="mt-6 -p-100 border-b border-grey-100 "></div> */}
      <div className="py-4 px-8  flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
