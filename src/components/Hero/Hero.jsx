import "./Hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="hero">

      {/* Glow Effects */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <Navbar />

      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-tag">
            Explore the world
          </span>

          <h1>
            Travel Beyond <br />
            Your Imagination
          </h1>

          <p>
            Discover curated premium travel experiences
            designed for unforgettable adventures.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Packages
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        {/* Floating Card */}

        <div className="hero-card">

          <span className="card-badge">
            Trending
          </span>

          <h3>Kashmir Escape</h3>

          <p>
            5 Days • 4 Nights
          </p>

          <div className="card-price">
            ₹12,999
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;