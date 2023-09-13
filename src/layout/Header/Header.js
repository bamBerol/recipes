import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import style from "./Header.module.css";

const Header = () => {
  let navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <header
      className={`${style.header} d-flex flex-column align-items-center justify-content-center`}>
      <div className={`${style.headerUpperPart}`}></div>
      <div className={`${style.headerLowerPart}`}></div>
      <div className={style.logo} onClick={handleBackHome}>
        <img src={logo} alt="DITE" />
      </div>
    </header>
  );
};

export default Header;
