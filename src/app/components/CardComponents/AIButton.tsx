'use client';

import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { useAIModal } from '@/app/contexts/AIModalContext';

interface AIButtonProps {
  musicId: string;
  name_artist: string;
  name_song: string;
  url_cover_album_big: string;
}

export default function AIButton({ musicId, name_artist, name_song, url_cover_album_big }: AIButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useAIModal();

  const fetchLyrics = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/lyrics/${musicId}`);
      const data = await response.json();
      openModal({
        name_artist,
        name_song,
        url_cover_album_big,
        theme: data.theme,
        summary: data.summary
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des paroles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={fetchLyrics}
      className="btn btn-circle btn-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
      title="Voir l'analyse de la chanson"
    >
      <FaRobot className="w-4 h-4" />
    </button>
  );
} 