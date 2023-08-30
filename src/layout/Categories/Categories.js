import React from "react";
import Category from "../../component/Category/Category";
import style from "./Categories.module.css";

const Categories = ({ backBtn }) => {
  const categories = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  const categoryList = categories.map((category) => {
    let name = category.toLowerCase();
    return <Category key={name} name={name} />;
  });

  return (
    <section
      className={`${style.categories} d-flex flex-column align-items-center justify-content-between`}>
      <ul
        className={`${style.categoriesList} d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center`}>
        {categoryList}
      </ul>
      <button className={`${style.backBtn}`} onClick={backBtn}>
        Back
      </button>
    </section>
  );
};

export default Categories;
