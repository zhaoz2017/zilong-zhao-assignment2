import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">Conway’s Game of Life</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/simulation" className="nav-link" activeClassName="active">Game</NavLink>
            <NavLink to="/credits" className="nav-link" activeClassName="active">Credits</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
