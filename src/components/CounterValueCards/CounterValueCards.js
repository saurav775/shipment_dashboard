import React from "react";
import "./CounterValueCards.css";

const CounterValueCards = (props) => {
  const { counterData, currentStatusCode, getCurrentStatusCode } = props;

  const handleClick = (e) => {
    getCurrentStatusCode(e)
  }

  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      {Object.keys(counterData).map((e, id) => (
        <div
          className={[
            "d-flex flex-column counter-container flex-space-between p-0dot5 cursor-pointer",
            id > 0 && "ml-1",
            currentStatusCode === e && 'counter-container-active '
          ].join(" ")}
          key={e}
          onClick={() => handleClick(e)}
        >
          <div className="counter-text bold-font">{e}</div>
          <div className="counter-number text-center">{counterData[e]}</div>
        </div>
      ))}
    </div>
  );
};

export default CounterValueCards;
