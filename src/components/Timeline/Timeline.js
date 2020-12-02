import React from "react";
import { Flag, Warehouse } from "../../SvgComponents";
import "./Timeline.css";

const Timeline = (props) => {
  const { item } = props;
  return (
    <div className="timeline-item-container d-flex flex-column">
      <div className="icon-timeline d-flex flex-center">
        <Flag width={21} height={28} />
      </div>
      <div className="item-subcontainer">
        {item.map((i) => (
          <div className="d-flex" key={i.time}>
            <div className="d-flex flex-center icon-steps">
              <div className="steps-circle"></div>
              <div className="steps-line"></div>
            </div>
            <div className="d-flex flex-space-between item-container">
              <div className="steps-text main-text">{i.location.split(":")[0]}</div>
              <div className="steps-text">{i.time.split(" ")[0]}</div>
              <div className="steps-text">{i.time.split(" ")[1]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="icon-timeline d-flex flex-center">
        <Warehouse width={22} height={26} />
      </div>
    </div>
  );
};

export default Timeline;
