import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import style from "./LoadingIcon.module.css";
import ThemeContext from "../../context/ThemeContext";

const LoadingIcon = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${style.loadingDiv} ${theme.color} d-flex flex-column align-items-center justify-content-center`}>
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        size="2xl"
        className={` ${style.loadingIcon}`}
      />
    </div>
  );
};

export default LoadingIcon;
