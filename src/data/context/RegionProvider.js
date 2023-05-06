import React, { useState, createContext } from 'react';

export const RegionContext = createContext();

function RegionProvider({ children }) {
  const [region, setRegion] = useState('global');

  function changeRegion(newRegion) {
    setRegion(newRegion);
  }

  return (
    <RegionContext.Provider value={{ region, changeRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export default RegionProvider;