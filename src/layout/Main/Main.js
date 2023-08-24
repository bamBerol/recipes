import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import ErrorPage from "../ErrorPage/ErrorPage";
import styles from "./Main.module.css";

import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate("/");
  };
  return (
    <main className={`${styles.main} container d-flex`}>
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
