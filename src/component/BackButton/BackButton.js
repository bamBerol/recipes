import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./BackButton.module.css";

const BackButton = (props) => {
  const theme = useContext(ThemeContext);
  //console.log(props.searchIsClicked);
  //props.searchIsClicked(false);
  return (
    <button
      className={`${style.backBtn} ${theme.color}`}
      onClick={() => {
        if (typeof props.searchIsClicked === "function") {
          props.searchIsClicked(false);
        }
        if (typeof props.backBtn === "function") {
          props.backBtn();
        }
      }}>
      Back
    </button>
  );
};

export default BackButton;
