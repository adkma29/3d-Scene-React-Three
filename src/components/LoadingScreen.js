import React from 'react';
import './LoadingScreen.css';

function LoadingScreen({ progress }) {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <h1>Chargement des modèles 3D</h1>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{Math.round(progress)}% terminé</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
