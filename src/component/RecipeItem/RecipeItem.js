import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./RecipeItem.module.css";

import exampleImg from "../../images/snack.jpg";

const RecipeItem = ({ name, recipeName }) => {
  const theme = useContext(ThemeContext);

  return (
    <Link
      to={`/category/${name}/${recipeName}`}
      className={`${style.li} card border-0 rounded`}>
      <img
        src={exampleImg}
        className={`${style.img} card-img-top`}
        alt={recipeName}
      />
      <div
        className={`${style.cardText} ${theme.color}  text-center rounded-bottom`}>
        <h5 className={`${style.title} `}>{recipeName}</h5>
      </div>
    </Link>
  );
};

export default RecipeItem;
