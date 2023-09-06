import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import style from "./RecipeDetail.module.css";

const RecipeDetail = ({ categoryName }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(`/categories/${categoryName}`);
  };

  return (
    <section
      className={`${style.recipe} d-flex flex-column align-items-center justify-content-center`}>
      <h2 className={`${style.title} text-center`}>Name of recipe {id}</h2>
      <div className={`${style.bodyRecipe} h-100`}>Content</div>
      <BackButton backBtn={handleBackBtn} />
    </section>
  );
};

export default RecipeDetail;
