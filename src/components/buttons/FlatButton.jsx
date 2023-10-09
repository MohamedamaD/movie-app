import React from "react";
import "./Buttons.scss";
export const FlatButton = ({ value, className='', onClick = () => {} }) => {
  return <button className={`__flat-button ${className}`}>{value}</button>;
};
