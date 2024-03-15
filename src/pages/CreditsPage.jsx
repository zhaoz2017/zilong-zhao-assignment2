// src/pages/CreditsPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
const CreditsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center p-10">
        <h2 className="font-bold text-lg mb-4">Credits</h2>
        <p>Developed by [Yutong Dai & Zilong Zhao]</p>
        <a href="https://github.com/zhaoz2017/zilong-zhao-assignment2" className="text-blue-500 hover:text-blue-700">GitHub Repository</a>
      </div>
    </>
    
  );
};

export default CreditsPage;
