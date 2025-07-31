import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model({ path, position, scale }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} position={position} scale={scale} />;
}

export default Model;