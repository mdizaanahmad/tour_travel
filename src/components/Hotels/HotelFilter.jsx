import { useState } from 'react';
import { useFilter } from '../../context/FilterContext';
import '../styles/HotelFilter.css';

const HotelFilter = ({ onFilterChange }) => {
  const { hotelFilters, updateHotelFilters, resetHotelFilters } = useFilter();
  const allFacilities = ['WiFi', 'AC', 'Gym', 'Pool', 'Restaurant', 'Spa', 'Beach Access', 'Business Center', 'Fireplace', 'Mountain View', 'Lake View', 'Bar', '24/7 Front Desk'];

  const handlePriceChange = (field, value) => {
    updateHotelFilters({ [field]: parseInt(value) });
    onFilterChange();
  };

  const handleLocationChange = (value) => {
    updateHotelFilters({ location: value });
    onFilterChange();
  };

  const handleFacilityChange = (facility) => {
    const facilities = hotelFilters.facilities.includes(facility)
      ? hotelFilters.facilities.filter(f => f !== facility)
      : [...hotelFilters.facilities, facility];
    updateHotelFilters({ facilities });
    onFilterChange();
  };

  const handleReset = () => {
    resetHotelFilters();
    onFilterChange();
  };

  return (
    <div className="hotel-filter">
      <h3>Filter Hotels</h3>
      
      <div className="filter-group">
        <label>Price Range: ${hotelFilters.minPrice} - ${hotelFilters.maxPrice}</label>
        <input
          type="range"
          min="0"
          max="200"
          value={hotelFilters.minPrice}
          onChange={(e) => handlePriceChange('minPrice', e.target.value)}
          className="slider"
        />
        <input
          type="range"
          min="0"
          max="200"
          value={hotelFilters.maxPrice}
          onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
          className="slider"
        />
      </div>

      <div className="filter-group">
        <label>Location:</label>
        <input
          type="text"
          placeholder="Search location..."
          value={hotelFilters.location}
          onChange={(e) => handleLocationChange(e.target.value)}
          className="location-input"
        />
      </div>

      <div className="filter-group">
        <label>Facilities:</label>
        <div className="facility-checkboxes">
          {allFacilities.map(facility => (
            <label key={facility} className="checkbox-label">
              <input
                type="checkbox"
                checked={hotelFilters.facilities.includes(facility)}
                onChange={() => handleFacilityChange(facility)}
              />
              {facility}
            </label>
          ))}
        </div>
      </div>

      <button onClick={handleReset} className="reset-btn">Reset Filters</button>
    </div>
  );
};

export default HotelFilter;
