import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import ErrorPage from "../ErrorPage/ErrorPage";
import style from "./Main.module.css";

const Main = () => {
  let navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate("/");
  };

  return (
    <main
      className={`${style.main} d-flex align-items-center justify-content-center`}>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/categories"
          element={<Categories backBtn={handleBackBtnClick} />}></Route>
        <Route
          path="/search"
          element={<Search backBtn={handleBackBtnClick} />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
