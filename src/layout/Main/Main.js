import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Recipes from "../../component/Recipes/Recipes";
import RecipeDetail from "../../component/RecipeDetail/RecipesDetail";
import ThemeButton from "../ThemeButton/ThemeButton";
import ErrorPage from "../ErrorPage/ErrorPage";
import style from "./Main.module.css";

const Main = () => {
  let [categoryName, setCategoryName] = useState("");
  let [recipesList, setRecipesList] = useState();

  let navigate = useNavigate();

  const handleCategoryChoose = (name) => {
    console.log(name, "category open");
    let arr = name.split("");
    let initial = arr.shift().toUpperCase();
    let capitalize = [initial, ...arr].join("");

    setCategoryName(capitalize);
  };

  const handleBackBtnClick = () => {
    navigate("/");
  };

  const getRecipesList = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=
      public&app_id=c5d107fe&app_key=15390b6cb323a8eda394
      766336317a01&mealType=${categoryName}
    `
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.hits);
          setRecipesList(res.data.hits);
        }
      });
  };

  useEffect(getRecipesList, []);

  return (
    <main
      className={`${style.main} d-flex align-items-stretch justify-content-center`}>
      <ThemeButton />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/categories"
          element={
            <Categories
              backBtn={handleBackBtnClick}
              categoryChoose={(name) => handleCategoryChoose(name)}
            />
          }></Route>
        <Route
          path="/categories/:name"
          element={<Recipes listOfRecipes={recipesList} />}></Route>
        <Route
          path="/categories/:name/:id"
          element={<RecipeDetail categoryName={categoryName} />}></Route>
        <Route
          path="/search"
          element={<Search backBtn={handleBackBtnClick} />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
