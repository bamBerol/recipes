import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import style from "./StartPage.module.css";

const StartPage = ({ startClick }) => {
  return (
    <div
      className={`${style.startPage}  d-flex flex-column align-items-center justify-content-center`}>
      <Link to="/" className={style.logo} onClick={startClick}>
        <img src={logo} alt="Logo" />
      </Link>
      <p>Click on logo</p>
    </div>
  );
};

export default StartPage;
