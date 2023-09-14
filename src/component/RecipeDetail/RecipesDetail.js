import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../BackButton/BackButton";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import Ingredients from "./Ingredients/Ingredients";
import Preparation from "./Preparation/Preparation";

import style from "./RecipeDetail.module.css";

const RecipeDetail = ({ categoryName }) => {
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [fullList, setFullList] = useState([]);

  let { id, search } = useParams();

  let navigate = useNavigate();

  const handleBackBtn = () => {
    if (categoryName !== undefined) {
      navigate(`/categories/${categoryName}`);
    } else if (search !== undefined) {
      navigate(`/search/${search}`);
    }
  };

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.meals);
        }
      });
  }, [id]);

  useEffect(() => {
    if (details.length !== 0) {
      setLoading(false);

      Object.entries(details[0]).filter(([key, value]) => {
        if (key.includes("Ingredient") && value !== null) {
          setIngredient((prevValue) => [...prevValue, value]);
        }
      });

      Object.entries(details[0]).filter(([key, value]) => {
        if (key.includes("Measure") && value !== null) {
          setMeasure((prevValue) => [...prevValue, value]);
        }
      });

      let ingreadientsAndMeasure = ingredient.map((ingredient, index) => ({
        [ingredient]: measure[index],
      }));

      setFullList(ingreadientsAndMeasure);
    }
  }, [details]);

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <section
          className={`${style.recipe} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className={`${style.title} text-center`}>{id}</h2>
          <div
            className={`${style.bodyRecipe} d-flex flex-column flex-lg-row justify-content-between`}>
            <Ingredients
              photo={details[0].strMealThumb}
              name={details[0].strMeal}
              ingredients={fullList}
            />
            <Preparation info={details[0]} />
          </div>
          <BackButton backBtn={handleBackBtn} />
        </section>
      )}
    </>
  );
};

export default RecipeDetail;
