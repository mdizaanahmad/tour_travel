import { useState } from 'react';
import { useFilter } from '../../context/FilterContext';
import '../styles/TourFilter.css';

const TourFilter = ({ onFilterChange }) => {
  const { tourFilters, updateTourFilters, resetTourFilters } = useFilter();

  const handlePriceChange = (field, value) => {
    updateTourFilters({ [field]: parseInt(value) });
    onFilterChange();
  };

  const handleDaysChange = (field, value) => {
    updateTourFilters({ [field]: parseInt(value) });
    onFilterChange();
  };

  const handleReset = () => {
    resetTourFilters();
    onFilterChange();
  };

  return (
    <div className="tour-filter">
      <h3>Filter Tours</h3>
      
      <div className="filter-group">
        <label>Price Range: ${tourFilters.minPrice} - ${tourFilters.maxPrice}</label>
        <input
          type="range"
          min="0"
          max="5000"
          value={tourFilters.minPrice}
          onChange={(e) => handlePriceChange('minPrice', e.target.value)}
          className="slider"
        />
        <input
          type="range"
          min="0"
          max="5000"
          value={tourFilters.maxPrice}
          onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
          className="slider"
        />
      </div>

      <div className="filter-group">
        <label>Duration: {tourFilters.minDays} - {tourFilters.maxDays} Days</label>
        <input
          type="range"
          min="0"
          max="30"
          value={tourFilters.minDays}
          onChange={(e) => handleDaysChange('minDays', e.target.value)}
          className="slider"
        />
        <input
          type="range"
          min="0"
          max="30"
          value={tourFilters.maxDays}
          onChange={(e) => handleDaysChange('maxDays', e.target.value)}
          className="slider"
        />
      </div>

      <button onClick={handleReset} className="reset-btn">Reset Filters</button>
    </div>
  );
};

export default TourFilter;
