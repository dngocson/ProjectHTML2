import "../App.scss";
import Logo1 from "../assets/logo.svg";
import Logo2 from "../assets/Lucy.svg";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [responsiveHeader, setResponsiveHeader] = useState(false);
  return (
    <div
      onClick={(e) => {
        return setResponsiveHeader(false);
      }}
      className="sectionContainer"
    >
      <header className="headerContainer">
        <div className="header__logo">
          <img src={Logo1} />
          <img src={Logo2} />
        </div>
        <div className={`header__nav ${responsiveHeader ? "responsive" : ""}`}>
          <nav>
            <ul className={`header__nav--list `}>
              <li>
                <a className="header__nav--active" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services & Rates</a>
              </li>
              <li>
                <a href="#comment">Reviewa</a>
              </li>
              <li>
                <a href="#contact">Contacts us</a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="#!" className="header__nav--button">
          Sign up
        </a>

        <button
          className="responsive_button"
          onClick={(e) => {
            e.stopPropagation();
            return setResponsiveHeader(!responsiveHeader);
          }}
        >
          <AiOutlineMenu />
        </button>
      </header>
    </div>
  );
};

export default Header;
