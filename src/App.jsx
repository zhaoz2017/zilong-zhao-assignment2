import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import CreditsPage from './pages/CreditsPage';
import SimulationPage from './pages/SimulationPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home></Home>}></Route>
          <Route path = '/home' element = {<Home></Home>}></Route>
          <Route path = '/credits'  element = {<CreditsPage></CreditsPage>}></Route>
          <Route path = '/simulation'  element = {<SimulationPage></SimulationPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
