import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Recipes from "../../component/Recipes/Recipes";
import RecipeDetail from "../../component/RecipeDetail/RecipesDetail";
import ThemeButton from "../ThemeButton/ThemeButton";
import ErrorPage from "../ErrorPage/ErrorPage";
import style from "./Main.module.css";

const Main = ({ searchIsClicked }) => {
  const [categoryName, setCategoryName] = useState("");

  let navigate = useNavigate();

  const handleCategoryChoose = (name) => {
    setCategoryName(name);
  };

  const handleBackBtnClick = () => {
    navigate("/");
  };

  return (
    <main
      className={`${style.main} d-flex align-items-stretch justify-content-center`}>
      <ThemeButton />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/categories"
          element={
            <Categories
              backBtn={handleBackBtnClick}
              categoryChoose={(name) => handleCategoryChoose(name)}
            />
          }></Route>
        <Route path="/categories/:name" element={<Recipes />}></Route>
        <Route
          path="/categories/:name/:id"
          element={<RecipeDetail categoryName={categoryName} />}></Route>
        <Route
          path="/search"
          element={
            <Search
              backBtn={handleBackBtnClick}
              searchIsClicked={searchIsClicked}
            />
          }></Route>
        <Route
          path="/search/:search"
          element={<Recipes searchIsClicked={searchIsClicked} />}></Route>
        <Route path="/search/:search/:id" element={<RecipeDetail />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
