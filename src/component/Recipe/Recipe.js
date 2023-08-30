import React from "react";
import { Link } from "react-router-dom";
import style from "./Recipe.module.css";

import exampleImg from "../../images/snack.jpg";

const Recipe = ({ name, recipeName }) => {
  return (
    <Link
      to={`/category/${name}/${recipeName}`}
      className={`${style.li} card border-0 rounded`}>
      <img
        src={exampleImg}
        className={`${style.img} card-img-top`}
        alt={recipeName}
      />
      <div className={`${style.cardText} card-body text-center rounded-bottom`}>
        <h5 className={`${style.title} card-title`}>{recipeName}</h5>
      </div>
    </Link>
  );
};

export default Recipe;
