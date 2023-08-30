import React, { useState } from "react";
import style from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ backBtn }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchBtn = () => {
    console.log("search click =", search);
    setSearch("");
  };

  return (
    <section
      className={`${style.search} container-fluid d-flex flex-column align-items-center justify-content-around justify-content-lg-evenly`}>
      <div
        className={`${style.title} container-fluid d-flex flex-column align-items-center justify-content-center text-center`}>
        <p>Search by name:</p>
        <div className={`${style.input} d-flex flex-column flex-lg-row`}>
          <input
            className={`${style.inputSearch} form-control`}
            value={search}
            onChange={handleSearch}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearchBtn() : null)}
            type="text"
            placeholder="Search here"></input>
          <button className={`${style.searchBtn}`} onClick={handleSearchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <button className={`${style.btn}`} onClick={backBtn}>
        Back
      </button>
    </section>
  );
};

export default Search;
