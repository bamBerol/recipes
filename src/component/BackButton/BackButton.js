import { useContext } from "react";
import style from "./BackButton.module.css";
import ThemeContext from "../../context/ThemeContext";

const BackButton = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      className={`${style.backBtn} ${theme.color}`}
      onClick={props.backBtn}>
      Back
    </button>
  );
};

export default BackButton;
