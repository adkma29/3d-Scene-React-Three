import React from 'react';
import Model from './Model';
import { EffectComposer, Bloom, DepthOfField, Vignette, Noise } from '@react-three/postprocessing';
import { useControls } from 'leva';
import AnimatedModel from './AnimatedModel';

function Scene() {
  // Contrôles Leva pour ajuster les effets en temps réel
  const { 
    bloomIntensity,
    bloomRadius,
    vignetteIntensity,
    depthOfFieldFocus,
    depthOfFieldBokeh,
    noiseOpacity
  } = useControls('Post-Processing', {
    bloomIntensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
    bloomRadius: { value: 0.8, min: 0, max: 2, step: 0.1 },
    vignetteIntensity: { value: 0.3, min: 0, max: 1, step: 0.1 },
    depthOfFieldFocus: { value: 0.1, min: 0, max: 1, step: 0.01 },
    depthOfFieldBokeh: { value: 2.0, min: 0, max: 10, step: 0.1 },
    noiseOpacity: { value: 0.02, min: 0, max: 0.1, step: 0.01 }
  });

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
        <meshStandardMaterial color="#2b2d42" />
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
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* Effets Post-Processing */}
      <EffectComposer>
        {/* Effet Bloom - Lueur lumineuse */}
        <Bloom 
          intensity={bloomIntensity}
          radius={bloomRadius}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
        
        {/* Effet Depth of Field - Flou de profondeur */}
        <DepthOfField
          focusDistance={depthOfFieldFocus}
          focalLength={0.02}
          bokehScale={depthOfFieldBokeh}
          height={480}
        />
        
        {/* Effet Vignette - Assombrissement des bords */}
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={vignetteIntensity}
        />
        
        {/* Effet Noise - Grain cinématographique */}
        <Noise 
          opacity={noiseOpacity}
        />
      </EffectComposer>
    </>
  );
}

export default Scene;