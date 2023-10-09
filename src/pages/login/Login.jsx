import React from "react";
import "./Login.scss";

import { images } from "../../constants";
import { Input, FlatButton } from "../../components";
import { BiCheck } from "react-icons/bi";
export const Login = () => {
  const links = [
    { name: "linkedin", link: "" },
    { name: "amazon", link: "" },
    { name: "google", link: "" },
  ];
  return (
    <div className="__login">
      <div className="container __login__container">
        <div className="__container__wrapper">
          <div className="logo">
            <img src={images.LOGO} alt="logo" />
          </div>
          <form action="">
            <Input
              id="email"
              labelValue="Username or Email Address"
              type="email"
            />
            <Input id="password" labelValue="password" type="password" />
            <div className="__forget-password">
              <a href="##">forget Password?</a>
            </div>
            <div className="input-fields __checkbox-wrapper">
              <div className="__custom-checkbox">
                <input type="checkbox" id="checkbox" />
                <span>
                  <BiCheck size={20} />
                </span>
              </div>
              <label htmlFor="checkbox" style={{ margin: 0 }}>
                Remember Me
              </label>
            </div>
            <FlatButton
              value="log in"
              className="__submit-btn"
              onClick={() => {}}
            />
            <div className="__register-wrapper">
              New to Streamit?<a href="##"> register</a>
            </div>
          </form>
          <div className="__br-wrapper">
            <span className="__line"></span>
            <span className="__br">or</span>
            <span className="__line"></span>
          </div>
          <div className="__links">
            {links.map((item, i) => (
              <a
                href={item.link}
                key={item + i}
                className={`__${item.name} __link`}
              >
                <box-icon name={item.name} type="logo" color="#fff" size="md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
