import Header from "../Header/Header";
import React from "react";
import style from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={style.Layout}>
      <Header />
      {props.children}
    </div>
  );
}
export default Layout;
