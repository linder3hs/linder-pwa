import React from "react";
import Menu from "../components/menu";
import Footer from "../views/home/components/footer";

const Layout = (props) => {
  return (
    <div>
      <Menu />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
