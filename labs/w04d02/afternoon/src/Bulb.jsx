import React from "react";

const Bulb = (props) => {
  return (
    <div
      className="bulb"
      style={{
        backgroundColor:
          props.color.id === props.id ? props.color.color : "grey",
      }}
      id={props.id}
    ></div>
  );
};

export default Bulb;
