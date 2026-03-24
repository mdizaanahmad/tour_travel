import { useMemo } from 'react';
import { useFilter } from '../context/FilterContext';
import { hotels } from '../data/hotels';
import HotelList from '../components/Hotels/HotelList';
import HotelFilter from '../components/Hotels/HotelFilter';
import '../styles/HotelsPage.css';

const HotelsPage = () => {
  const { hotelFilters } = useFilter();

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const priceMatch = hotel.price >= hotelFilters.minPrice && hotel.price <= hotelFilters.maxPrice;
      const locationMatch = !hotelFilters.location || hotel.location.toLowerCase().includes(hotelFilters.location.toLowerCase());
      const facilitiesMatch = hotelFilters.facilities.length === 0 || hotelFilters.facilities.every(facility => hotel.facilities.includes(facility));
      
      return priceMatch && locationMatch && facilitiesMatch;
    });
  }, [hotelFilters]);

  const handleFilterChange = () => {
    // Trigger re-render
  };

  return (
    <div className="hotels-page">
      <div className="page-header">
        <h1>Find Your Perfect Hotel</h1>
        <p>Browse our collection of hotels in various locations</p>
      </div>
      
      <div className="content">
        <aside className="sidebar">
          <HotelFilter onFilterChange={handleFilterChange} />
        </aside>
        
        <main className="main-content">
          <HotelList hotels={filteredHotels} />
        </main>
      </div>
    </div>
  );
};

export default HotelsPage;
