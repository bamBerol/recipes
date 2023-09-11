import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import style from "./HomeButton.module.css";

const HomeButton = ({ nameBtn }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`d-flex container align-items-center justify-content-center`}>
      <Link
        to={`/${nameBtn}`}
        className={`${style.btnBody} ${theme.color} d-flex align-items-center justify-content-center`}>
        {nameBtn}
      </Link>
    </div>
  );
};

export default HomeButton;
