import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model({ path, position, scale, rotation = [0, 0, 0] }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} position={position} scale={scale} rotation={rotation} />;
}

export default Model;