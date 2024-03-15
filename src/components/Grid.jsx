import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ rows = 20, cols = 20 }) => {
  const createGrid = () => {
    const newGrid = Array(rows).fill(null).map(() => 
    Array(cols).fill(null).map(() => ({
        alive: Math.random() < 0.05,
        iterationsSinceLastAlive: -2}))
    );
    const selected = newGrid.flat().filter(cell => cell.alive).length; // 新增：计算选中的单元格数量
    return { grid: newGrid, selectedCount: selected };
  };

  const initialGridData = createGrid();
  const [grid, setGrid] = useState(initialGridData.grid);
  const [selectedCount, setSelectedCount] = useState(initialGridData.selectedCount);
  const [isHeatMapEnabled, setIsHeatMapEnabled] = useState(false);

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
    setGrid(newGrid);
  
    const newSelectedCount = newGrid.flat().filter(cell => cell.alive).length;
    setSelectedCount(newSelectedCount);
  };

  const toggleCellState = (x, y) => {
    const newGrid = [...grid];
    newGrid[x][y].alive = !newGrid[x][y].alive;
    setGrid(newGrid);
    const newSelectedCount = newGrid.flat().filter(cell => cell.alive).length;
    setSelectedCount(newSelectedCount);
  };

  const toggleHeatMapEnable = () => {
    setIsHeatMapEnabled(!isHeatMapEnabled);
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
                className={`grid-cell ${cell.alive ? 'selected' : ''}`}
                style={{ backgroundColor: getColor(cell) }}
                onClick={() => toggleCellState(x, y)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={resetGrid}>Reset</button>
      <button onClick={handleNext}>Next</button>
      <label className="heatmap-checkbox">
        Select to Enable Heatmap 
      </label>
      <input type="checkbox" checked={isHeatMapEnabled} onChange={toggleHeatMapEnable} />
      


    </div>
  );
};

export default Grid;
