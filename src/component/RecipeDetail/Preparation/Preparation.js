import style from "./Preparation.module.css";

const Preparation = (props) => {
  const regExp = /(?<=[.!?])\s+(?=[A-Z0-9])/;
  const instruction = props.info.strInstructions.split(regExp);
  const rightInstruction = instruction.filter(
    (element) => !/\d+\./.test(element)
  );

  const prepInstruction = rightInstruction.map((instruction, index) => (
    <li key={index}>{instruction}</li>
  ));

  return (
    <div className={`${style.instruction}`}>
      <div className={`${style.basicInfo} flex-lg-row justify-content-between`}>
        <div className={`d-flex`}>
          <h5 className="d-flex align-items-center">Category:</h5>{" "}
          <h5 className="d-flex align-items-center">{`${props.info.strCategory}`}</h5>
        </div>
        <div className={`d-flex`}>
          <h5 className="d-flex align-items-center">Origin of the dish:</h5>{" "}
          <h5 className="d-flex align-items-center">
            {" "}
            {`${props.info.strArea}`}
          </h5>
        </div>
      </div>
      <div className={`${style.preparation} `}>
        <ul>{prepInstruction}</ul>
      </div>
    </div>
  );
};

export default Preparation;
