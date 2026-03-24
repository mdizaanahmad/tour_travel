import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/TourCard.css';

const TourCard = ({ tour }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/bookings', { state: { tourId: tour.id } });
    }
  };

  return (
    <div className="tour-card">
      <div className="tour-image">
        <img src={tour.image} alt={tour.name} />
        <span className="duration-badge">{tour.days} Days</span>
      </div>
      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p className="destinations">📍 {tour.destinations.join(', ')}</p>
        <p className="price">${tour.price}</p>
        <p className="rating">⭐ {tour.rating} Rating</p>

        <div className="includes">
          <h4>Includes:</h4>
          <div className="include-tags">
            {tour.includes.map((item, index) => (
              <span key={index} className="include-tag">{item}</span>
            ))}
          </div>
        </div>

        {showDetails && (
          <div className="tour-details">
            <p><strong>Description:</strong> {tour.description}</p>
            <h4>Itinerary:</h4>
            <ul className="schedule">
              {tour.schedule.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="tour-actions">
          <button 
            className="details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button 
            className="book-btn"
            onClick={handleBooking}
          >
            Book Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
