import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import InputSearch from "../../component/InputSearch/InputSearch";
import BackButton from "../../component/BackButton/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./Search.module.css";

const Search = ({ backBtn, searchIsClicked }) => {
  const [search, setSearch] = useState("");

  const theme = useContext(ThemeContext);
  //const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  /*
  const handleSearchBtn = () => {
    let regex = /^[A-Za-z]{3,10}$/;
    let nameSearch = search;

    if (regex.test(nameSearch) !== false) {
      navigate(`/search/${search}`);
      searchIsClicked(true);
    } else {
      alert(
        "The entered name must have a min. 3 max 10 characters without spaces, numbers and special characters"
      );
      setSearch("");
      searchIsClicked(false);
      //focusOnInput();
    }
  };
  const focusOnInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusOnInput();
  }, []);
*/
  return (
    <section
      className={`${style.search} container-fluid d-flex flex-column align-items-center justify-content-around justify-content-lg-evenly`}>
      <div
        className={`${style.title} container-fluid d-flex flex-column align-items-center justify-content-center text-center`}>
        <p>Search by name:</p>
        <div className={`${style.input} d-flex flex-column flex-lg-row`}>
          <InputSearch
            value={search}
            handleSearch={handleSearch}
            searchIsClicked={searchIsClicked}
          />
          {/*<input
            ref={inputRef}
            className={`${style.inputSearch} form-control`}
            value={search}
            onChange={handleSearch}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearchBtn() : null)}
            type="text"
            maxLength={10}
            placeholder="Search here"></input>*/}
          <button
            className={`${style.searchBtn} ${theme.color}`}
            //onClick={handleSearchBtn}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <BackButton backBtn={backBtn} />
    </section>
  );
};

export default Search;
