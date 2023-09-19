import { useRef, useEffect } from "react";
import style from "./InputSearch.module.css";

const InputSearch = (props) => {
  const inputRef = useRef(null);

  const value =
    typeof props.value !== "undefined" ? props.value : props.valueHeader;

  const handleChange =
    typeof props.handleSearch !== "undefined"
      ? props.handleSearch
      : props.handleHeaderSearch;

  const handleKeyDown =
    typeof props.handleSearchBtn === "function"
      ? props.handleSearchBtn
      : props.handleHeaderSearchBtn;

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
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => (e.key === "Enter" ? handleKeyDown() : null)}
        type="text"
        maxLength={10}
        placeholder="Search here"></input>
    </>
  );
};

export default InputSearch;
