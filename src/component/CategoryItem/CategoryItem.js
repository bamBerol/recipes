import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import breakfastImg from "../../images/breakfast.jpg";
import dinnerImg from "../../images/dinner.jpg";
import lunchImg from "../../images/lunch.jpg";
import snackImg from "../../images/snack.jpg";
import teaTimeImg from "../../images/teatime.jpg";
import style from "./CategoryItem.module.css";

const CategoryItem = ({ name, categoryChoose }) => {
  const theme = useContext(ThemeContext);

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

  const chooseCategory = () => {
    categoryChoose(name);
  };
  return (
    <>
      <Link
        to={`/category/${name}`}
        className={`${style.link} `}
        onClick={chooseCategory}>
        <div className={`${style.li}  ${theme.color} card border-0 rounded`}>
          <img src={photo} className={`${style.img} card-img-top`} alt={name} />
          <div
            className={`${style.cardText}  ${theme.color} text-center rounded-bottom`}>
            <h5 className={`${style.title} `}>{name}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryItem;
