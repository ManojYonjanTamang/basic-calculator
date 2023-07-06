import React from "react";

const CalcButtons = (props) => {
  return (
    <>
      <button
        className={props.className}
        onClick={() => props.onClick(props.value)}
      >
        {props.value}
      </button>
    </>
  );
};

export default CalcButtons;
