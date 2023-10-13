import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { images, navLinks, pagesLinks } from "../../constants";

export const Navbar = () => {
  const [isLoginPanelVisible, setLoginPanelVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const userIcon = useRef(null);
  const loginPanel = useRef(null);
  const searchPanel = useRef(null);

  const handleUserClick = () => {
    setLoginPanelVisible(!isLoginPanelVisible);
  };
  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSearchVisible &&
        searchPanel.current &&
        !searchPanel.current.contains(e.target)
      ) {
        setSearchVisible(false);
      }
      if (
        isLoginPanelVisible &&
        userIcon.current &&
        loginPanel.current &&
        !userIcon.current.contains(e.target) &&
        !loginPanel.current.contains(e.target)
      ) {
        setLoginPanelVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoginPanelVisible, isSearchVisible]);
  return (
    <div className="__navbar-wrapper">
      <div className="__navbar__container container">
        <div className="brand">
          <img src={images.LOGO} alt="logo" />
        </div>

        <nav className="__links">
          {navLinks.map((link, i) => (
            <a href={`/${link}`} key={i}>
              {link}
            </a>
          ))}
        </nav>

        <div className="__icons-wrapper">
          <div className="__item __search-item">
            {isSearchVisible && (
              <div className="__nav-search" ref={searchPanel}>
                <div className="__icon">
                  <box-icon name="search" size="sm"></box-icon>
                </div>
                <input type="text" placeholder="search" />
              </div>
            )}

            {!isSearchVisible && (
              <div className="__icon __rounded" onClick={handleSearchClick}>
                <box-icon name="search" size="md"></box-icon>
              </div>
            )}
          </div>
          <div className="__item">
            <div
              ref={userIcon}
              onClick={handleUserClick}
              className="__icon __rounded"
            >
              <box-icon name="user" size="md"></box-icon>
            </div>
            {isLoginPanelVisible && (
              <ul id="__pages-nav__ul" ref={loginPanel}>
                {pagesLinks.map((item, index) => (
                  <li key={item.link + index}>
                    <a href={item.link}>
                      <div className="__icon">
                        <box-icon name={item.icon} size="sm"></box-icon>
                      </div>
                      <span>{item.link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="__item">
            <div className="__icon __rounded">
              <box-icon name="menu" id="__menu-icon" size="md"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
