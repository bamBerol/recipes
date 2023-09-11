import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  const theme = useContext(ThemeContext);

  let { strCategory, strCategoryThumb } = props.info;

  const chooseCategory = () => {
    props.categoryChoose(strCategory);
  };

  return (
    <>
      <Link
        to={`/categories/${strCategory}`}
        className={`${style.link} `}
        onClick={chooseCategory}>
        <div className={`${style.li}  ${theme.color} card border-0 rounded`}>
          <img
            src={strCategoryThumb}
            alt={strCategory}
            className={`${style.img} card-img-top`}
          />
          <div
            className={`${style.cardText}  ${theme.color} text-center rounded-bottom`}>
            <h5 className={`${style.title} `}>{strCategory}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryItem;
