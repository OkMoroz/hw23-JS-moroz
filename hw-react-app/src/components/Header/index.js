import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
      <button className="btn">Let's go</button>
    </div>
  );
};

export default Header;
