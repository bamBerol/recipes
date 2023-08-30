import React from "react";
import { Link } from "react-router-dom";
import breakfastImg from "../../images/breakfast.jpg";
import dinnerImg from "../../images/dinner.jpg";
import lunchImg from "../../images/lunch.jpg";
import snackImg from "../../images/snack.jpg";
import teaTimeImg from "../../images/teatime.jpg";
import style from "./Category.module.css";

const Category = ({ name }) => {
  let photo;

  if (name === "breakfast") {
    photo = breakfastImg;
  } else if (name === "dinner") {
    photo = dinnerImg;
  } else if (name === "lunch") {
    photo = lunchImg;
  } else if (name === "snack") {
    photo = snackImg;
  } else if (name === "teatime") {
    photo = teaTimeImg;
  }

  return (
    <>
      <Link to={`/category/${name}`} className={`${style.link}`}>
        <div className={`${style.li} card border-0 rounded`}>
          <img src={photo} className={`${style.img} card-img-top`} alt={name} />
          <div
            className={`${style.cardText} card-body text-center rounded-bottom`}>
            <h5 className={`${style.title} card-title`}>{name}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Category;
