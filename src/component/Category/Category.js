import React from "react";
import breakfastImg from "../../images/breakfast.jpg";
import dinnerImg from "../../images/dinner.jpg";
import lunchImg from "../../images/lunch.jpg";
import snackImg from "../../images/snack.jpg";
import teaTimeImg from "../../images/teatime.jpg";
import style from "./Category.module.css";

const Category = ({ name }) => {
  let photo;

  if (name.toLowerCase() === "breakfast") {
    photo = breakfastImg;
  } else if (name.toLowerCase() === "dinner") {
    photo = dinnerImg;
  } else if (name.toLowerCase() === "lunch") {
    photo = lunchImg;
  } else if (name.toLowerCase() === "snack") {
    photo = snackImg;
  } else if (name.toLowerCase() === "teatime") {
    photo = teaTimeImg;
  }

  return (
    <>
      <li className={`${style.li} col `}>
        <div className={`${style.cardB} card  border-0 h-100`}>
          <div className="overflow-hidden">
            <img src={photo} className="card-img-top rounded-top" alt={name} />
          </div>
          <div
            className={`${style.cardText} card-body rounded-bottom d-flex align-items-center justify-content-center`}>
            <h5 className={`${style.title} card-title`}>{name}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default Category;
