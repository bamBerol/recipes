import { useParams, useNavigate } from "react-router-dom";
import RecipeItem from "../RecipeItem/RecipeItem";
import BackButton from "../BackButton/BackButton";
import style from "./Recipes.module.css";

const Recipes = () => {
  let { name } = useParams();

  let navigate = useNavigate();

  const recipes = [
    "recipe1",
    "recipe2",
    "recipe3",
    "recipe4",
    "recipe5",
    "recipe6",
    "recipe7",
    "recipe8",
    "recipe9",
    "recipe10",
  ];

  const handleBackBtn = () => {
    navigate("/categories");
  };

  let showRecipeItem = recipes.map((recipe) => (
    <RecipeItem key={recipe} name={name} recipeName={recipe} />
  ));

  return (
    <section
      className={`${style.recipes} d-flex flex-column align-items-center justify-content-between`}>
      <h2 className={`${style.title}`}>{name}:</h2>
      <ul
        className={`${style.recipesList} d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center`}>
        {showRecipeItem}
      </ul>
      <BackButton backBtn={handleBackBtn} />
    </section>
  );
};

export default Recipes;
