import { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "../../component/CategoryItem/CategoryItem";
import style from "./Categories.module.css";
import BackButton from "../../component/BackButton/BackButton";
import LoadingIcon from "../../component/LoadingIcon/LoadingIcon";

const Categories = ({ backBtn, categoryChoose }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        if (res.status === 200) {
          setCategories(res.data.categories);
        }
      });
  }, []);

  if (categories.length === 0) {
    return <LoadingIcon />;
  }

  const categoriesList = categories.map((category) => {
    return (
      <CategoryItem
        key={category.idCategory}
        info={category}
        categoryChoose={categoryChoose}
      />
    );
  });

  return (
    <section
      className={`${style.categories} d-flex flex-column align-items-center justify-content-between`}>
      <ul
        className={`${style.categoriesList} d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center`}>
        {categoriesList}
      </ul>
      <BackButton backBtn={backBtn} />
    </section>
  );
};

export default Categories;
