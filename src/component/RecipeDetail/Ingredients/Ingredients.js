import style from "./Ingredients.module.css";

const Ingredients = (props) => {
  const { photo, name, ingredients } = props;

  const list = ingredients.map((ingredient, index) => {
    if (Object.keys(ingredient)[0].length > 2) {
      return (
        <li
          key={index}
          className={`${style.li} d-flex justify-content-between`}>
          <div className={`${style.name} d-flex align-items-center`}>
            {Object.keys(ingredient)}
          </div>
          <div className={`d-flex flex-wrap text-end`}>
            {Object.values(ingredient)}
          </div>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className={`d-flex flex-column`}>
      <div className={`${style.imgCard}`}>
        <img src={photo} alt={name} className={`${style.recipeImg}`} />
      </div>
      <div>
        <ul className={`${style.ingredientsList} d-flex flex-column`}>
          {list}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
