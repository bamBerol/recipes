import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./InputSearch.module.css";

const InputSearch = (props) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearchBtn = () => {
    let regex = /^[A-Za-z]{3,10}$/;
    let nameSearch = props.value;

    if (regex.test(nameSearch) !== false) {
      navigate(`/search/${props.value}`);
      props.searchIsClicked(true);
    } else {
      alert(
        "The entered name must have a min. 3 max 10 characters without spaces, numbers and special characters"
      );
      //setSearch("");
      props.searchIsClicked(false);
      //focusOnInput();
    }
  };

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusOnInput();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        className={`${style.inputSearch} form-control`}
        value={props.value}
        onChange={props.handleSearch}
        onKeyDown={(e) => (e.key === "Enter" ? handleSearchBtn() : null)}
        type="text"
        maxLength={10}
        placeholder="Search here"></input>
    </>
  );
};

export default InputSearch;
