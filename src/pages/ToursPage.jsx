import { useMemo } from 'react';
import { useFilter } from '../context/FilterContext';
import { tours } from '../data/tours';
import TourList from '../components/Tours/TourList';
import TourFilter from '../components/Tours/TourFilter';
import '../styles/ToursPage.css';

const ToursPage = () => {
  const { tourFilters } = useFilter();

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const priceMatch = tour.price >= tourFilters.minPrice && tour.price <= tourFilters.maxPrice;
      const daysMatch = tour.days >= tourFilters.minDays && tour.days <= tourFilters.maxDays;
      
      return priceMatch && daysMatch;
    });
  }, [tourFilters]);

  const handleFilterChange = () => {
    // Trigger re-render
  };

  return (
    <div className="tours-page">
      <div className="page-header">
        <h1>Explore Tour Packages</h1>
        <p>Discover our curated tour packages around the world</p>
      </div>
      
      <div className="content">
        <aside className="sidebar">
          <TourFilter onFilterChange={handleFilterChange} />
        </aside>
        
        <main className="main-content">
          <TourList tours={filteredTours} />
        </main>
      </div>
    </div>
  );
};

export default ToursPage;
