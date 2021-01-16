import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="active">
            <a href="#home-section">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#skills-section">Skills</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </header>
  );
};

export default NavBar;
