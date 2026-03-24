import TourCard from './TourCard';
import '../styles/TourList.css';

const TourList = ({ tours }) => {
  if (tours.length === 0) {
    return (
      <div className="no-results">
        <p>No tours found matching your filters. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="tour-list">
      <h2>Available Tours</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
