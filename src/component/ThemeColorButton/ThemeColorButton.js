import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import style from "./ThemeColorButton.module.css";

const ThemeColorButton = (props) => {
  const theme = useContext(ThemeContext);

  console.log(props.themeColor, props.themeActive, props.nameOfClass);

  return (
    <>
      <div
        className={`${style.themeColorButton} ${
          props.themeActive ? style.active : ""
        } d-flex flex-column justify-content-center align-items-center`}
        onClick={() => {
          theme.changeTheme(`${props.themeColor}`);
          props.switchTheme();
        }}>
        <div
          className={`${style.colorButton} ${
            style[props.nameOfClass]
          } rounded-circle`}></div>
      </div>
    </>
  );
};
export default ThemeColorButton;
