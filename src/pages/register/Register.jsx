import React from "react";
import "./Register.scss";
import { FlatButton, Input } from "../../components";

export const Register = () => {
  return (
    <div className="__register">
      <div className="container __register__container">
        <form id="__register__form">
          <h1>Create Your Account</h1>
          <div className="form-inputs">
            <div className="input-part">
              <Input type="text" id="firstName" labelValue="First Name" />
              <Input type="text" id="LastName" labelValue="Last Name" />
            </div>
            <div className="input-part">
              <Input type="text" id="userName" labelValue="User Name*" />
              <Input type="email" id="email" labelValue="Email*" />
            </div>
            <div className="input-part">
              <Input type="password" id="password" labelValue="Password*" />
              <Input
                type="password"
                id="confirmPassword"
                labelValue="Confirm Password*"
              />
            </div>
          </div>
          <p>
            <input type="checkbox" id="__terms" />
            <label htmlFor="__terms">
              I've read and accept the <span>terms & condtions*</span>
            </label>
          </p>
          <FlatButton value="sign up" />
          <p className="down-form">
            Already have an account? <a href="/">login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
