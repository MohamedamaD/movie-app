import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import Logo from "../../assets/logo.png";
import { FlatButton, Input } from "../../components";
const data = [
  {
    id: 1,
    title: "Quick Links",
    link1: "About Us",
    link2: "Blog",
    link3: "Pricing",
    link4: "FAQ",
  },
  {
    id: 2,
    title: "Movies To Watch",
    link1: "Top Trending",
    link2: "Recommended",
    link3: "Popular",
  },
  {
    id: 2,
    title: "About Company",
    link1: "Contact",
    link2: "Privacy Policy",
    link3: "Terms Of Use",
  },
];
export const Footer = () => {
  return (
    <div className="_footer">
      <div className="_footer_top_part">
        <div className="_footer_desc">
          <img src={Logo} alt="logo" />
          <p>Emailus:customer@stremit.com</p>
          <p>COSTUMER SERVICES</p>
          <h1>+(480)555-0103</h1>
        </div>
        <div className="links">
          {data.map((item) => {
            return (
              <div>
                <h2>{item.title}</h2>
                <ul>
                  <li>
                    <a href="#">{item.link1}</a>
                  </li>
                  <li>
                    <a href="#">{item.link2}</a>
                  </li>
                  <li>
                    <a href="#">{item.link3}</a>
                  </li>
                  <li>
                    <a href="#">{item.link4}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        <div className="_footer_subscribe">
          <h2>Subscribe Newletter</h2>
          <div className="_footer_input">
            <Input type="text" placeholder="Email" />
            <FlatButton value="SUBSCRIBE" />
          </div>
          <div>
            <span>Follow Us:</span>
            <a href="#">
              {" "}
              <BiLogoFacebookCircle className="_footer_icon" />
            </a>
            <a href="#">
              <BiLogoInstagram className="_footer_icon" />
            </a>
            <a href="#">
              {" "}
              <BiLogoTwitter className="_footer_icon" />
            </a>
          </div>
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
            on platform are trademarks of,and all realted images and content are
            the property of, Stream Inc. Duplicated and copy of this is stricity
            prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};
