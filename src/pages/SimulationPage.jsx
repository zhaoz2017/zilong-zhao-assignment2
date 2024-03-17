import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import Grid from "../components/Grid"
import { GridProvider } from '../contexts/GridContext';

export default function SimulationPage() {
    const [inputRows, setInputRows] = useState(20);
    const [inputCols, setInputCols] = useState(20);
    const [rows, setRows] = useState(20); // State for actual grid rows
    const [cols, setCols] = useState(20); // State for actual grid columns
    const [error, setError] = useState('');
  
    const validateInput = (value) => {
      return value >= 3 && value <= 40;
    };
  
    const handleRowsChange = (event) => {
      const value = event.target.value;
      if (value === '') {
          setInputRows('');
          setError('');
      } else {
          const numValue = parseInt(value, 10);
          if (!isNaN(numValue)) {
              setInputRows(numValue);
              setError('');
          }
      }
  };
  
  const handleColsChange = (event) => {
      const value = event.target.value;
      if (value === '') {
          setInputCols('');
          setError('');
      } else {
          const numValue = parseInt(value, 10);
          if (!isNaN(numValue)) {
              setInputCols(numValue);
              setError('');
          }
      }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const numRows = inputRows !== '' ? parseInt(inputRows, 10) : '';
    const numCols = inputCols !== '' ? parseInt(inputCols, 10) : '';

    if (numRows !== '' && numCols !== '' && validateInput(numRows) && validateInput(numCols)) {
        setRows(numRows);
        setCols(numCols);
        setError('');
    } else {
        setError('Height and width must be between 3 and 40.');
    }
  };
  
    return (
        <GridProvider>
            
                <Navbar></Navbar>
                
                <div class="container-fluid">
                <h1>🏁 Let's game! </h1>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="number"
                      value={inputRows}
                      onChange={handleRowsChange}
                      placeholder="Height (rows)"
                    />
                    <input
                      type="number"
                      value={inputCols}
                      onChange={handleColsChange}
                      placeholder="Width (cols)"
                    />
                  </div>
                <button type="submit" class="btn btn-primary">Update Grid</button>
                </form>
                {error && <p className="error">{error}</p>}
                <Grid rows={rows} cols={cols} />
            </div>

        </GridProvider>

    );
}