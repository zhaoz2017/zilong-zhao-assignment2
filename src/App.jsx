import React, { useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {
  const [inputRows, setInputRows] = useState(20);
  const [inputCols, setInputCols] = useState(20);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [error, setError] = useState('');

  const validateInput = (value) => {
    return value >= 3 && value <= 40;
  };

  const handleRowsChange = (event) => {
    const value = event.target.value;
    setInputRows(value === '' ? '' : Number(value));
    setError('');
  };

  const handleColsChange = (event) => {
    const value = event.target.value;
    setInputCols(value === '' ? '' : Number(value));
    setError('');
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
    <div className="App">
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
  );
}

export default App;
