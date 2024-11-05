// contexts/AudioContext.tsx

'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// 1. Création de l'interface pour le contexte.
//    Elle définit ce que le contexte Audio doit offrir :
//    - L'ID de la carte qui joue actuellement un son
//    - Une fonction pour changer cette carte
interface AudioContextProps {
  activeAudioId: string | null;
  setActiveAudioId: (id: string | null) => void;
}

// 2. Création du contexte lui-même avec `createContext`.
//    Initialement, `activeAudioId` est `null` car aucune carte ne joue un son au départ.
//    Nous utilisons `undefined` pour forcer l'utilisateur à encapsuler son composant avec le fournisseur (Provider) du contexte.
const AudioContext = createContext<AudioContextProps | undefined>(undefined);

// 3. Création du fournisseur (Provider) du contexte.
//    Le fournisseur est un composant qui encapsule les composants enfants
//    et leur fournit l'état du contexte.
export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // 4. Nous utilisons `useCallback` pour créer une fonction qui change l'ID de la carte active.
  //    Cela permet de mettre à jour `activeAudioId` et donc de désactiver les autres cartes.
  const handleSetActiveAudioId = useCallback((id: string | null) => {
    setActiveAudioId(id);
  }, []);

  return (
    <AudioContext.Provider value={{ activeAudioId, setActiveAudioId: handleSetActiveAudioId }}>
      {children}
    </AudioContext.Provider>
  );
};

// 5. Création d'un hook personnalisé `useAudio` pour utiliser le contexte.
//    Cela simplifie l'utilisation du contexte dans les composants.
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
