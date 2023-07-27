import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="title">Services</h2>
      <nav className="items">
        <p className="item" href="#">
          Web Design
        </p>
        <p className="item" href="#">
          Product Design
        </p>
        <p className="item" href="#">
          UI/UX Design
        </p>
        <p className="item" href="#">
          Art Direction
        </p>
      </nav>
    </div>
  );
};

export default Sidebar;
