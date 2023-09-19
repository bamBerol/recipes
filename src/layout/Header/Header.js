import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputSearch from "../../component/InputSearch/InputSearch";
import logo from "../../logo.svg";
import style from "./Header.module.css";

const Header = ({ searchIsClicked, handleSearchIsClicked }) => {
  const [searchHeader, setSearchHeader] = useState([]);
  let navigate = useNavigate();

  const handleHeaderSearch = (e) => {
    setSearchHeader(e.target.value.toLowerCase());
  };

  const handleHeaderSearchBtn = () => {
    let regex = /^[A-Za-z]{3,10}$/;
    let search = searchHeader;

    if (regex.test(search) !== false) {
      navigate(`/search/${search}`);
      setSearchHeader("");
    } else {
      alert(
        "The entered name must have a min. 3 max 10 characters without spaces, numbers and special characters"
      );
      setSearchHeader("");
    }
  };

  const handleBackHome = () => {
    handleSearchIsClicked(false);
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
          <InputSearch
            valueHeader={searchHeader}
            searchIsClicked={searchIsClicked}
            handleHeaderSearch={handleHeaderSearch}
            handleHeaderSearchBtn={handleHeaderSearchBtn}
          />
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
