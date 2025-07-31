import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './components/Scene';
import LoadingScreen from './components/LoadingScreen';
import { useModelLoader } from './hooks/useModelLoader';
import './App.css';

function App() {
  const { loadingProgress, isLoaded } = useModelLoader();

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      {!isLoaded && <LoadingScreen progress={loadingProgress} />}
      
      <Canvas 
        camera={{ position: [0, 5, 10], fov: 50 }}
        shadows
      >
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;