import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={`${style.home} d-flex container-fluid flex-column flex-lg-row align-items-center justify-content-evenly`}>
      <div
        className={`d-flex container align-items-center justify-content-center`}>
        <Link
          to="/categories"
          className={`${style.btnBody} d-flex align-items-center justify-content-center`}>
          Categories
        </Link>
      </div>
      <div className="d-flex container align-items-center justify-content-center">
        <Link
          to="/search"
          className={`${style.btnBody} d-flex align-items-center justify-content-center`}>
          Search
        </Link>
      </div>
    </section>
  );
};
export default Home;
