import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ rows = 20, cols = 20 }) => {
  const createGrid = () => {
    const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(false).map(() => Math.random() < 0.05));
    const selected = newGrid.flat().filter(cell => cell).length; // 新增：计算选中的单元格数量
    return { grid: newGrid, selectedCount: selected };
  };

  const initialGridData = createGrid();
  const [grid, setGrid] = useState(initialGridData.grid);
  const [selectedCount, setSelectedCount] = useState(initialGridData.selectedCount);

  useEffect(() => {
    const { grid: newGrid, selectedCount: newSelectedCount } = createGrid();
    setGrid(newGrid);
    setSelectedCount(newSelectedCount);
  }, [rows, cols]);

  const resetGrid = () => {
    const { grid: newGrid, selectedCount: newSelectedCount } = createGrid();
    setGrid(newGrid);
    setSelectedCount(newSelectedCount); 
  };
  

  const countNeighbors = (grid, x, y) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i, newY = y + j;
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY]) {
          count++;
        }
      }
    }
    return count;
  };

  const getNextGeneration = (grid) => {
    return grid.map((row, x) =>
      row.map((cell, y) => {
        const neighbors = countNeighbors(grid, x, y);
        if (cell) {
          return neighbors === 2 || neighbors === 3;
        } else {
          return neighbors === 3;
        }
      })
    );
  };

  const handleNext = () => {
    const newGrid = getNextGeneration(grid);
    setGrid(newGrid);
  
    const newSelectedCount = newGrid.flat().filter(cell => cell).length;
    setSelectedCount(newSelectedCount);
  };

  const toggleCellState = (x, y) => {
    const newGrid = [...grid];
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
    const newSelectedCount = newGrid.flat().filter(cell => cell).length;
    setSelectedCount(newSelectedCount);
  };

  return (
    <div>
      <div className="selected-count">{selectedCount} selected cells</div>
      <div className="grid">
        {grid.map((row, x) => (
          <div key={x} className="grid-row">
            {row.map((cell, y) => (
              <div
                key={y}
                className={`grid-cell ${cell ? 'selected' : ''}`}
                onClick={() => toggleCellState(x, y)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={resetGrid}>Reset</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Grid;
