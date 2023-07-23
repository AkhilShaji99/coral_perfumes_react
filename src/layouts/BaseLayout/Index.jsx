import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Account from "./Account";
import Menubar from "./Menubar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import OTPModal from "./OTPModal";
import { useEffect } from "react";

const BaseLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);
  return (
    <>
      <div className="border-bottom ">
        <TopHeader />
        <Account />
        <Menubar />
        <CartDrawer />
        <OTPModal />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
