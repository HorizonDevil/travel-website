import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        Traveno
      </div>

      <div className="nav-links">
        <a href="#">Destination</a>
        <a href="#">Packages</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      <button className="nav-btn">
        Explore
      </button>

    </nav>
  );
};

export default Navbar;