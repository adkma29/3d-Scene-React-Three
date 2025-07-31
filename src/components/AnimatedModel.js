import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

function AnimatedModel({ path, position, scale, rotation = [0, 0, 0] }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fonction pour démarrer/arrêter l'animation
  const toggleAnimation = () => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = Object.keys(actions)[0];
      
      if (isAnimating) {
        // Arrêter l'animation
        actions[firstAnimation]?.stop();
        setIsAnimating(false);
      } else {
        // Démarrer l'animation
        actions[firstAnimation]?.reset().play();
        setIsAnimating(true);
      }
    }
  };

  useEffect(() => {
    if (animations && animations.length > 0) {
      console.log('Animations disponibles:', animations.map(anim => anim.name));
    }
  }, [animations]);

  return (
    <group ref={group} position={position} scale={scale} rotation={rotation}>
      <primitive 
        object={scene} 
        onClick={toggleAnimation}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'default';
        }}
      />
    </group>
  );
}

export default AnimatedModel;
