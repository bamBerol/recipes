import style from "./BackButton.module.css";

const BackButton = (props) => {
  return (
    <button className={`${style.backBtn}`} onClick={props.backBtn}>
      Back
    </button>
  );
};

export default BackButton;
