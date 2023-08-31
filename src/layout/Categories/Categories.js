import CategoryItem from "../../component/CategoryItem/CategoryItem";
import style from "./Categories.module.css";
import BackButton from "../../component/BackButton/BackButton";

const Categories = ({ backBtn, categoryChoose }) => {
  const categories = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  const categoryList = categories.map((category) => {
    let name = category.toLowerCase();
    return (
      <CategoryItem key={name} name={name} categoryChoose={categoryChoose} />
    );
  });

  return (
    <section
      className={`${style.categories} d-flex flex-column align-items-center justify-content-between`}>
      <ul
        className={`${style.categoriesList} d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center`}>
        {categoryList}
      </ul>
      <BackButton backBtn={backBtn} />
    </section>
  );
};

export default Categories;
