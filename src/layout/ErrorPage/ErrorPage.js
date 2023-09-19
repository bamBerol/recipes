import style from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div
      className={`${style.error} d-flex flex-column flex-lg-row align-items-center justify-content-center`}>
      <div className={`${style.exclamation}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-exclamation-circle"
          viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </div>
      <div
        className={`${style.errorMsg} d-flex flex-column justify-content-evenly`}>
        <h5>Recipe not found </h5>{" "}
        <h5 className="text-center text-lg-start">Please try again</h5>
      </div>
    </div>
  );
};

export default ErrorPage;
