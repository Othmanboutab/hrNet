import logo from "../assets/logo.svg";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Kasa logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/employee/list">Employees</a>
            <div className="line"></div>
          </li>
          <li className="new-btn">
            <a href="/employee/new">
              + <i className="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
