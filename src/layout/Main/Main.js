import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Recipes from "../../component/Recipes/Recipes";
import RecipeDetail from "../../component/RecipeDetail/RecipesDetail";
import ErrorPage from "../ErrorPage/ErrorPage";
import style from "./Main.module.css";

const Main = () => {
  let [categoryName, setCategoryName] = useState("");

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
        <Route path="/category/:name" element={<Recipes />}></Route>
        <Route
          path="/category/:name/:id"
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
