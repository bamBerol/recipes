import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />
      <p>Loading</p>
    </div>
  );
};

export default LoadingIcon;
