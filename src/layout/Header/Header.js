import React from "react";
import logo from "../../logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={`${style.header} d-flex flex-column align-items-center justify-content-center`}>
      <div className={`${style.headerUpperPart}`}></div>
      <div className={`${style.headerLowerPart}`}></div>
      <div className={style.logo}>
        <img src={logo} alt="DITE" />
      </div>
    </header>
  );
};

export default Header;
