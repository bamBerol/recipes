import React from "react";
import style from "./Category.module.css";

const Category = ({ name }) => {
  return (
    <>
      <li
        className={`${style.li} d-flex align-items-center justify-content-center`}>
        <div
          className={`${style.card} d-flex container-md align-items-center justify-content-center`}>
          <div>{name.toUpperCase()}</div>
        </div>
      </li>
    </>
  );
};

export default Category;
