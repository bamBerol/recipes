import React from "react";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../component/InputSearch/InputSearch";
import logo from "../../logo.svg";
import style from "./Header.module.css";

const Header = ({ searchIsClicked }) => {
  let navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`${style.header} d-flex flex-column align-items-center justify-content-center`}>
      <div className={`${style.headerUpperPart}`}></div>
      <div className={`${style.headerLowerPart}`}></div>

      <div
        className={
          searchIsClicked ? style.logoAfterClick : style.logoBeforeClick
        }
        onClick={handleBackHome}>
        <img src={logo} alt="DITE" />
      </div>

      {searchIsClicked ? (
        <div className={`${style.input} `}>
          <input
            className={`form-control`}
            type="text"
            placeholder="Search here"></input>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
