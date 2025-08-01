import React from 'react';
import Model from './Model';
import AnimatedModel from './AnimatedModel';

function Scene() {
  return (
    <>
      {/* Éclairage */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow 
      />
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={0.5} 
        color="#ffffff"
      />
      <pointLight 
        position={[0, 5, 0]} 
        intensity={0.10} 
        color="#f0f0f0"
      />

      {/* Sol */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#b8f2e6" />
      </mesh>

      {/* Modèles statiques */}
      <Model 
        path="/models/Chest.glb" 
        position={[-15, 0, -8]} 
        scale={6}
        rotation={[0, Math.PI / 4, 0]}
      />
      <Model 
        path="/models/Houseplant.glb" 
        position={[-2, 0, -6]} 
        scale={7} 
      />
      <Model 
        path="/models/luffy_hat.glb" 
        position={[-5, 0, 0]} 
        scale={4} 
      />
      <Model
        path="/models/tulip.glb"
        position={[3, 2, 0]}
        scale={3}
      />
      <Model
        path="/models/Bonsai.glb"
        position={[-13, 3, 0]}
        scale={3}
      />   
      <Model
        path="/models/shelfplant.glb"
        position={[-5, 10, -15]}
        scale={10}
      />

      {/* Modèle animé */}
      <AnimatedModel 
        path="/models/Pimelea Suaveolens.glb" 
        position={[-8, 0, -6]} 
        scale={5}
        // Teste ajout de rotation 
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
}

export default Scene;