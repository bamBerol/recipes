import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import style from "./HomeButton.module.css";

const HomeButton = ({ nameBtn }) => {
  const theme = useContext(ThemeContext);

  const opacity = {
    opacity: 0.8,
  };

  return (
    <div
      className={`d-flex container align-items-center justify-content-center`}>
      <Link
        to={`/${nameBtn}`}
        style={opacity}
        className={`${style.btnBody} ${theme.color} d-flex align-items-center justify-content-center`}>
        {nameBtn}
      </Link>
    </div>
  );
};

export default HomeButton;
