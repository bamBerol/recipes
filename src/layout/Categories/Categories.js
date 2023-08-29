import React from "react";
import Category from "../../component/Category/Category";
import style from "./Categories.module.css";

const Categories = ({ backBtn }) => {
  const categories = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  const categoryList = categories.map((category) => {
    return <Category key={category} name={category} />;
  });

  return (
    <section
      className={`${style.categories} d-flex flex-column align-items-center justify-content-between`}>
      <div>
        <p className="d-flex text-center">Choose category:</p>
      </div>
      <ul
        className={`${style.categoriesList} row row-cols-1 row-cols-sm-2 row-cols-lg-3  justify-content-center g-4`}>
        {categoryList}
      </ul>
      <button className={`${style.backBtn}`} onClick={backBtn}>
        Back
      </button>
    </section>
  );
};

export default Categories;
