import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  let { search, name } = useParams();
  let { strMeal, strMealThumb } = props.info;
  const theme = useContext(ThemeContext);

  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <Link
        to={
          name !== undefined
            ? `/categories/${name}/${strMeal}`
            : `/search/${search}/${strMeal}`
        }
        className={`${style.li} card border-0 rounded`}>
        <img
          src={strMealThumb}
          className={`${style.img} card-img-top`}
          alt={strMeal}
        />
        <div
          className={`${style.cardText} ${theme.color} d-flex flex-wrap  
          text-center justify-content-center align-items-center rounded-bottom`}>
          <h5 className={`${style.title}`}>{strMeal}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RecipeItem;
