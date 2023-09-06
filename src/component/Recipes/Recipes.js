import { useParams, useNavigate } from "react-router-dom";
import RecipeItem from "../RecipeItem/RecipeItem";
import BackButton from "../BackButton/BackButton";
import style from "./Recipes.module.css";

const Recipes = ({ listOfRecipes }) => {
  let { name } = useParams();
  let navigate = useNavigate();

  const recipes = listOfRecipes;

  const handleBackBtn = () => {
    navigate("/categories");
  };

  console.log("lista", recipes);

  let showRecipeItem = recipes.map((recipe) => (
    <RecipeItem
      key={recipe.recipe.label}
      name={name}
      recipeName={recipe.recipe.label}
    />
  ));

  return (
    <section
      className={`${style.recipes} d-flex flex-column align-items-center justify-content-between`}>
      <h2 className={`${style.title}`}>{name}:</h2>
      <ul
        className={`${style.recipesList} d-flex flex-column flex-lg-row flex-wrap align-items-stretch justify-content-center`}>
        {showRecipeItem}
      </ul>
      <BackButton backBtn={handleBackBtn} />
    </section>
  );
};

export default Recipes;
