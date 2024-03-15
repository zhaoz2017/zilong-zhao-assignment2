// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="font-bold">Game of Life</h1>
      <div>
        <Link className="px-4 hover:text-blue-300" to="/">Home</Link>
        <Link className="px-4 hover:text-blue-300" to="/simulation">Simulation</Link>
        <Link className="px-4 hover:text-blue-300" to="/credits">Credits</Link>
      </div>
    </nav>
  );
};

export default Navbar;
