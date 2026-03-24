import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>🌍 Welcome to Tour & Travel</h1>
          <p>Discover amazing destinations and create unforgettable memories</p>
          <div className="hero-buttons">
            <Link to="/hotels" className="btn btn-primary">Explore Hotels</Link>
            <Link to="/tours" className="btn btn-secondary">Browse Tours</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🏨 Wide Selection</h3>
            <p>Access to thousands of hotels worldwide with great rates</p>
          </div>
          <div className="feature-card">
            <h3>📦 Complete Packages</h3>
            <p>All-inclusive tour packages with flights, hotels, and activities</p>
          </div>
          <div className="feature-card">
            <h3>💳 Secure Booking</h3>
            <p>Safe and secure payment options for your peace of mind</p>
          </div>
          <div className="feature-card">
            <h3>⭐ Best Experiences</h3>
            <p>Curated destinations and experiences for travelers</p>
          </div>
        </div>
      </section>

      <section className="popular">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="https://via.placeholder.com/200x200?text=Paris" alt="Paris" />
            <h3>Paris, France</h3>
            <p>The City of Light awaits your visit</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/200x200?text=Tokyo" alt="Tokyo" />
            <h3>Tokyo, Japan</h3>
            <p>Experience modern and traditional culture</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/200x200?text=Dubai" alt="Dubai" />
            <h3>Abu Dhabi, UAE</h3>
            <p>Luxury and adventure in the desert</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/200x200?text=Sydney" alt="Sydney" />
            <h3>Sydney, Australia</h3>
            <p>Iconic landmarks and stunning beaches</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
