import React from "react";
import "./Input.scss";
export const Input = ({ type = "text", labelValue, placeholder = "", id }) => {
  return (
    <div className="input-fields">
      <label htmlFor={id}>{labelValue}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
