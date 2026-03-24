import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/HotelCard.css';

const HotelCard = ({ hotel }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/bookings', { state: { hotelId: hotel.id } });
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <span className="stars">
        {'★'.repeat(fullStars)}
        {hasHalfStar && '⯨'}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
        <span className="rating-badge">{hotel.rating} ⭐</span>
      </div>
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p className="location">📍 {hotel.location}</p>
        
        <div className="rating-section">
          {renderStars(hotel.rating)}
          <span className="rating-number">{hotel.rating}</span>
          <span className="reviews-count">({hotel.reviews} reviews)</span>
        </div>
        
        <p className="price">₹{hotel.price.toLocaleString('en-IN')}<span className="per-night">/night</span></p>
        
        <div className="facilities">
          <h4>Facilities:</h4>
          <div className="facility-tags">
            {hotel.facilities.map((facility, index) => (
              <span key={index} className="facility-tag">{facility}</span>
            ))}
          </div>
        </div>

        {showDetails && (
          <div className="hotel-details">
            <p><strong>Description:</strong> {hotel.description}</p>
            <p><strong>Rooms Available:</strong> {hotel.rooms}</p>
          </div>
        )}

        <div className="hotel-actions">
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
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
