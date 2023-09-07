import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import style from "./RecipeDetail.module.css";

const RecipeDetail = ({ categoryName }) => {
  const [details, setDetails] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(`/categories/${categoryName}`);
  };

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
      .then((res) => {
        if (res.status === 200) setDetails(res.data.meals);
      });
  }, []);

  if (details.length === 0) {
    return <LoadingIcon />;
  }

  return (
    <section
      className={`${style.recipe} d-flex flex-column align-items-center justify-content-center`}>
      <h2 className={`${style.title} text-center`}>{id}</h2>
      <div className={`${style.bodyRecipe} h-100`}>Content</div>
      <BackButton backBtn={handleBackBtn} />
    </section>
  );
};

export default RecipeDetail;
