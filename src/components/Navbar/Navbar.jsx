import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        
        {/* Logo */}
        <div className="logo">✦ Travel</div>

        {/* Center Nav */}
        <div className="nav-links">
          <span>Destination</span>
          <span>Packages</span>
          <span>Pricing</span>
          <span>About</span>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        
        <div className="menu-header">
          <h3>Menu</h3>
          <span onClick={() => setMenuOpen(false)}>×</span>
        </div>

        <div className="menu-links">
          <p onClick={() => setMenuOpen(false)}>Destination</p>
          <p onClick={() => setMenuOpen(false)}>Packages</p>
          <p onClick={() => setMenuOpen(false)}>Pricing</p>
          <p onClick={() => setMenuOpen(false)}>About</p>
        </div>

      </div>
    </>
  );
};

export default Navbar;