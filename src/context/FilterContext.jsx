import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [hotelFilters, setHotelFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    location: '',
    facilities: []
  });

  const [tourFilters, setTourFilters] = useState({
    minPrice: 0,
    maxPrice: 5000,
    minDays: 0,
    maxDays: 30
  });

  const updateHotelFilters = (filters) => {
    setHotelFilters(prev => ({ ...prev, ...filters }));
  };

  const updateTourFilters = (filters) => {
    setTourFilters(prev => ({ ...prev, ...filters }));
  };

  const resetHotelFilters = () => {
    setHotelFilters({
      minPrice: 0,
      maxPrice: 10000,
      location: '',
      facilities: []
    });
  };

  const resetTourFilters = () => {
    setTourFilters({
      minPrice: 0,
      maxPrice: 5000,
      minDays: 0,
      maxDays: 30
    });
  };

  return (
    <FilterContext.Provider
      value={{
        hotelFilters,
        tourFilters,
        updateHotelFilters,
        updateTourFilters,
        resetHotelFilters,
        resetTourFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within FilterProvider');
  }
  return context;
};
