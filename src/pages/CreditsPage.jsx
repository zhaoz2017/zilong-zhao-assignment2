// src/pages/CreditsPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
const CreditsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div class="container-fluid">

        <h1>📝 Credits</h1>
        <div class="card need-blue-background need-white-color">
          <div class="card-body">
            
            <h2 class="first-h2">Developed by</h2>
            <p>Yutong Dai</p>
            <p>Zilong Zhao</p>

            <h2>Github repo</h2>
            <p>
              <a href="https://github.com/zhaoz2017/zilong-zhao-yutong-dai-assignment2" class="first-h2 need-white-color">
                https://github.com/zhaoz2017/zilong-zhao-yutong-dai-assignment2
              </a>
            </p>
            
          </div>
        </div>

      </div>
    </>
    
  );
};

export default CreditsPage;
