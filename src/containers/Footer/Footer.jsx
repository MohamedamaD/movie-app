import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

import { FlatButton, Input } from "../../components";
import { images } from "../../constants/images";
import { aboutCompany, movies, quicklinks } from "../../constants";

export const Footer = () => {
  return (
    <div className="_footer">
      <div className="_footer_wrapper">
        <div className="_footer_top_part">
          <div className="_footer_desc">
            <img src={images.LOGO} alt="logo" />
            <p>Emailus:customer@stremit.com</p>
            <p>COSTUMER SERVICES</p>
            <h1>+(480)555-0103</h1>
          </div>

          <div className="links">
            <h1>quick links</h1>
            <ul>
              {quicklinks.map((item, i) => (
                <li>
                  {" "}
                  <a href={item} key={i}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links">
            <h1>movie to whatch</h1>
            <ul>
              {movies.map((item, i) => (
                <li>
                  {" "}
                  <a href={item} key={i}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <h1>about company</h1>
            <ul>
              {aboutCompany.map((item, i) => (
                <li>
                  <a href={item} key={i}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="_footer_subscribe">
            <h2>Subscribe </h2>
            <div className="_footer_input">
              <Input type="text" placeholder="Email" />
              <FlatButton value="SUBSCRIBE" />
            </div>
            <span>
              <a href="">
                <BiLogoFacebookCircle />
              </a>
            </span>
            <span>
              <a href="">
                <BiLogoInstagram />
              </a>
            </span>
            <span>
              <a href="">
                <BiLogoTwitter />
              </a>
            </span>
          </div>
        </div>

        <div className="_footer_bottom_part">
          <div className="_footer_left_part">
            <a href="#">Term Of Use</a>
            <a href="#"> Privacy Policy</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
            <a href="#">Watch List</a>
            <p>
              2023 <span>STAREAMIT</span>.All Right Reserved.All Viedos and show
              on platform are trademarks of,and all realted images and content
              are the property of, Stream Inc. Duplicated and copy of this is
              stricity prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
