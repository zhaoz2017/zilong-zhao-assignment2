import React, { useState, useEffect } from 'react';
import { useGridContext } from '../contexts/GridContext';
import './Grid.css';

const Grid = ({ rows = 20, cols = 20 }) => {

  const { grid, updateGrid, selectedCount, isHeatMapEnabled, toggleHeatMap } = useGridContext();
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const createGrid = () => {
    const newGrid = Array(rows).fill(null).map(() => 
    Array(cols).fill(null).map(() => ({
        alive: Math.random() < 0.05,
        iterationsSinceLastAlive: -2}))
    );
    updateGrid(newGrid); // Update the global state
  };

  useEffect(() => {
    createGrid();
  }, [rows, cols]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, grid]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const countNeighbors = (grid, x, y) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = x + i, newY = y + j;
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY].alive) {
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
        let newAliveState = cell.alive;
        let iterations = cell.iterationsSinceLastAlive;
        
        if (cell.alive) {
          newAliveState = neighbors === 2 || neighbors === 3;
          if (!newAliveState) {
            iterations = 1;
          }
        } else {
          newAliveState = neighbors === 3;
          if (newAliveState) {
            iterations = 0;
          } else {
            if (iterations != -2) {
              iterations += 1;
            }
          }
        
        }

        return {
          alive: newAliveState,
          iterationsSinceLastAlive: iterations,
        };
      })
    );
  };

  const getColor = (cell) => {
    // 如果单元格存活，返回黑色
    if (cell.alive) return 'black';
    
    // 否则，根据iterationsSinceLastAlive值决定颜色
    const { iterationsSinceLastAlive: iterations } = cell;
    if (isHeatMapEnabled) {
      if (iterations >= 1 && iterations <= 2) return '#007BFF';
      if (iterations >= 3 && iterations <= 4) return '#248DFF';
      if (iterations >= 5 && iterations <= 6) return '#48A0FF';
      if (iterations >= 7 && iterations <= 8) return '#6DB3FF';
      if (iterations >= 9 && iterations <= 10) return '#91C6FF';
      return 'white';
    }
    return 'white'; // iterations > 10 或 cell当前不存活
  };

  const handleNext = () => {
    const newGrid = getNextGeneration(grid);
    updateGrid(newGrid);
  };

  const toggleCellState = (x, y) => {
    const newGrid = [...grid];
    newGrid[x][y].alive = !newGrid[x][y].alive;
    updateGrid(newGrid);
  };

  return (
    <div class="container-fluid">
      <div className="selected-count">{selectedCount} selected cells</div>
      <div className="grid">
        {grid.map((row, x) => (
          <div key={x} className="grid-row">
            {row.map((cell, y) => (
              <div
                key={y}
                className={`grid-cell ${cell.alive ? 'selected' : ''}`}
                style={{ backgroundColor: getColor(cell) }}
                onClick={() => toggleCellState(x, y)}
              ></div>
            ))}
          </div>
        ))}
      </div >
      <div>
        <button type="button" class="btn btn-primary" onClick={createGrid}>Reset</button>
        <button type="button" class="btn btn-primary" onClick={handleNext}>Next</button>
        <button type="button" className="btn btn-primary" onClick={toggleAutoPlay}>
          {isAutoPlaying ? 'Stop AutoPlay' : 'Start AutoPlay'}
        </button>
        <div class="form-check form-switch need-margin-top">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isHeatMapEnabled} onChange={toggleHeatMap} />
          <label class="form-check-label" for="flexSwitchCheckDefault">Select to Enable Heatmap </label>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};

export default Grid;
