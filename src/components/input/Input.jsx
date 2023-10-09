import React from "react";
import "./Input.scss";
export const Input = ({
  type = "text",
  className = "",
  labelValue,
  placeholder = "",
  id,
}) => {
  return (
    <div className={`input-fields ${className}`}>
      <label htmlFor={id}>{labelValue}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
