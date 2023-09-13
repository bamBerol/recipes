import { useContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import ThemeContext from "../../context/ThemeContext";
import BackButton from "../../component/BackButton/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./Search.module.css";

const Search = ({ backBtn }) => {
  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const theme = useContext(ThemeContext);

  const inputRef = useRef(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchBtn = () => {
    console.log("search click");
    setIsClicked(true);
  };

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusOnInput();
  }, []);

  useEffect(() => {
    console.log(isClicked, search);
    if (isClicked) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => {
          console.log(res.data.meals);
          setIsClicked(false);
          setSearch("");
        });
    }
  }, [isClicked]);

  return (
    <section
      className={`${style.search} container-fluid d-flex flex-column align-items-center justify-content-around justify-content-lg-evenly`}>
      <div
        className={`${style.title} container-fluid d-flex flex-column align-items-center justify-content-center text-center`}>
        <p>Search by name:</p>
        <div className={`${style.input} d-flex flex-column flex-lg-row`}>
          <input
            ref={inputRef}
            className={`${style.inputSearch} form-control`}
            value={search}
            onChange={handleSearch}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearchBtn() : null)}
            type="text"
            placeholder="Search here"></input>
          <button
            className={`${style.searchBtn} ${theme.color}`}
            onClick={handleSearchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <BackButton backBtn={backBtn} />
    </section>
  );
};

export default Search;
