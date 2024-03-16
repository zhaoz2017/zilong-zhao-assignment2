import React, { createContext, useState, useContext } from 'react';

const GridContext = createContext();

export const useGridContext = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [isHeatMapEnabled, setIsHeatMapEnabled] = useState(false);

  // Function to update grid and selectedCount
  const updateGrid = (newGrid) => {
    setGrid(newGrid);
    setSelectedCount(newGrid.flat().filter(cell => cell.alive).length);
  };

  // Toggle heat map
  const toggleHeatMap = () => {
    setIsHeatMapEnabled(!isHeatMapEnabled);
  };

  return (
    <GridContext.Provider value={{ grid, selectedCount, isHeatMapEnabled, updateGrid, toggleHeatMap }}>
      {children}
    </GridContext.Provider>
  );
};
