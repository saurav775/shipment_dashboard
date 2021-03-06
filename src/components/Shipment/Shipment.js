import React from "react";
import "./Shipment.css";

const Shipment = (props) => {
  const {
    data: { _id, awbno, carrier, from, to, createdAt, current_status, current_status_code },
    onShipmentClick,
    currentItem,
  } = props;

  return (
    <div
      className={[
        "d-flex table-body flex-space-between",
        currentItem._id === _id && "active-item",
      ].join(" ")}
      onClick={() => onShipmentClick(_id)}
    >
      <div className="table-body-text">{awbno}</div>
      <div className="table-body-text">{carrier}</div>
      <div className="table-body-text">{from}</div>
      <div className="table-body-text">{to}</div>
      <div className="table-body-text">
        {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className="table-body-text">
        {props.data.hasOwnProperty("extra_fields") &&
        props.data.extra_fields.expected_delivery_date
          ? new Date(
              props.data.extra_fields.expected_delivery_date
            ).toLocaleDateString()
          : "-"}
      </div>
      <div className={["table-body-text", current_status_code === 'DEL' && 'green-text'].join(' ')}>{current_status}</div>
    </div>
  );
};

export default Shipment;
