import React from "react";
import { useParams } from "react-router-dom";

const RecipesDetail = () => {
  let { id } = useParams();

  return <div>Recipes detail {id}</div>;
};

export default RecipesDetail;
