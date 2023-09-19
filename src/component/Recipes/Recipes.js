import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeItem from "../RecipeItem/RecipeItem";
import BackButton from "../BackButton/BackButton";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import style from "./Recipes.module.css";
import ErrorPage from "../../layout/ErrorPage/ErrorPage";

const Recipes = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipesList, setRecipesList] = useState([]);

  let { name, search } = useParams();
  let navigate = useNavigate();

  const handleBackBtn = () => {
    if (name !== undefined) {
      navigate("/categories");
    } else if (search !== undefined) {
      props.searchIsClicked(false);
      navigate("/search");
    }
  };

  useEffect(() => {
    if (name !== undefined) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.meals && res.data.meals.length > 0) {
              setRecipesList(res.data.meals);
              setIsLoading(false);
            } else {
              setRecipesList([]);
              setIsLoading(false);
            }
          }
        });
    } else if (search !== undefined) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.meals && res.data.meals.length > 0) {
              setRecipesList(res.data.meals);
              setIsLoading(false);
            } else {
              setRecipesList([]);
              setIsLoading(false);
            }
          }
        });
    }
  }, [search]);

  let showRecipeItem = null;

  if (recipesList && recipesList.length > 0) {
    showRecipeItem = recipesList.map((recipe) => (
      <RecipeItem key={recipe.idMeal} name={name} info={recipe} />
    ));
  }

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <section
          className={`${style.recipes} d-flex flex-column align-items-center justify-content-between`}>
          {name !== undefined ? (
            <h2 className={`${style.title}`}> {name} </h2>
          ) : (
            <h2 className={`${style.title} text-center`}>
              {" "}
              {`Result of search for: "${search}"`}
            </h2>
          )}
          <ul
            className={`${style.recipesList} d-flex flex-column flex-lg-row flex-wrap align-items-stretch justify-content-center`}>
            {showRecipeItem ? showRecipeItem : <ErrorPage />}
          </ul>
          <BackButton backBtn={handleBackBtn} />
        </section>
      )}
    </>
  );
};

export default Recipes;
