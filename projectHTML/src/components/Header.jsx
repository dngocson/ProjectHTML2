import "../App.scss";
import Logo1 from "../assets/logo.svg";
import Logo2 from "../assets/Lucy.svg";
const Header = () => {
  return (
    <div className="sectionContainer">
      <header className="headerContainer">
        <div className="header__logo">
          <img src={Logo1} />
          <img src={Logo2} />
        </div>
        <div className="header__nav">
          <nav>
            <ul className="header__nav--list">
              <li>
                <a className="header__nav--active" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Services & Rates</a>
              </li>
              <li>
                <a href="#!">Reviewa</a>
              </li>
              <li>
                <a href="#!">Contacts us</a>
              </li>
            </ul>
          </nav>
        </div>
        <a href="#!" className="header__nav--button">
          Sign up
        </a>
      </header>
    </div>
  );
};

export default Header;
