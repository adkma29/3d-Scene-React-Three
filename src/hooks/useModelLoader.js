import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

// Liste des modèles à preload
const modelPaths = [
  '/models/Chest.glb',
  '/models/Houseplant.glb', 
  '/models/luffy_hat.glb',
  '/models/Pimelea Suaveolens.glb'
];

// Preload tous les modèles
modelPaths.forEach(path => {
  useGLTF.preload(path);
});

export function useModelLoader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalModels = modelPaths.length;

    // Simuler le chargement progressif
    const checkLoading = async () => {
      for (let i = 0; i < totalModels; i++) {
        // Attendre un délai pour simuler le chargement réel
        await new Promise(resolve => setTimeout(resolve, 500));
        
        loadedCount++;
        const progress = (loadedCount / totalModels) * 100;
        setLoadingProgress(progress);
        
        if (loadedCount === totalModels) {
          // Petit délai avant de cacher l'écran de chargement
          setTimeout(() => {
            setIsLoaded(true);
          }, 500);
        }
      }
    };

    checkLoading();
  }, []);

  return { loadingProgress, isLoaded };
}
