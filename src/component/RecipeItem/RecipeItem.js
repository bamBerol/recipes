import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  const theme = useContext(ThemeContext);
  let { strMeal, strMealThumb } = props.info;

  return (
    <div>
      <Link
        to={`/categories/${props.name}/${strMeal}`}
        className={`${style.li} card border-0 rounded`}>
        <img
          src={strMealThumb}
          className={`${style.img} card-img-top`}
          alt={strMeal}
        />
        <div
          className={`${style.cardText} ${theme.color} d-flex flex-wrap  text-center justify-content-center align-items-center rounded-bottom`}>
          <h5 className={`${style.title}`}>{strMeal}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RecipeItem;
