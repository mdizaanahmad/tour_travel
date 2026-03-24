import HotelCard from './HotelCard';
import '../styles/HotelList.css';

const HotelList = ({ hotels }) => {
  if (hotels.length === 0) {
    return (
      <div className="no-results">
        <p className="no-results-text">No hotels found matching your filters. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="hotel-list">
      <h2>Available Hotels</h2>
      <div className="hotels-grid">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
