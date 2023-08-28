import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={`${style.home} container-fluid d-flex flex-column flex-lg-row justify-content-evenly justify-content-lg-around`}>
      <div
        className={`${style.homeItem} d-flex align-items-center justify-content-center`}>
        <Link
          to="/categories"
          className={`${style.btn} d-flex align-items-center justify-content-center`}>
          Categories
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link
          to="/search"
          className={`${style.btn} d-flex align-items-center justify-content-center`}>
          Search
        </Link>
      </div>
    </section>
  );
};
export default Home;
