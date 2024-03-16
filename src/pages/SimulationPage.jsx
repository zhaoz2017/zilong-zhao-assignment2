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
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
          setInputRows(value);
          setError('');
        }
      };
    
    const handleColsChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setInputCols(value);
            setError('');
        }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputRows !== '' && inputCols !== '' && validateInput(inputRows) && validateInput(inputCols)) {
        setRows(inputRows);
        setCols(inputCols);
      } else {
        setError('Height and width must be between 3 and 40.');
      }
    };
  
    return (
        <GridProvider>
            <div className="">
                <Navbar></Navbar>
                <form onSubmit={handleSubmit}>
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
                <button type="submit">Update Grid</button>
                </form>
                {error && <p className="error">{error}</p>}
                <Grid rows={rows} cols={cols} />
            </div>

        </GridProvider>

    );
}