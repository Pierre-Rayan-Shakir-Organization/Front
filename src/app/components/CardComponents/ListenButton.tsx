'use client';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext.tsx';

interface ListenButtonProps {
  titre: string;
  artiste: string;
  deezerLink: string;
  url_preview: string;
  url_cover_album_big: string;
}

export default function ListenButton({ titre, artiste, deezerLink, url_preview, url_cover_album_big, }: ListenButtonProps) {
  const { userId } = useUser();

  if (!userId) return null;

  const handleClick = async () => {
    const date = new Date().toISOString();
  
    try {
      await axios.put(
        'http://localhost:3000/calendar/add',
        {
          titre,
          artiste,
          date,
          userId,
          url_preview,
          url_cover_album_big,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
  
      toast.success('🎉 Événement ajouté à votre agenda !');
      window.open(deezerLink, '_blank');
    } catch (error) {
      console.error('Erreur lors de l’ajout à l’agenda :', error);
      toast.error('❌ Erreur lors de l’ajout à l’agenda.');
    }
  };
  

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-xs py-1 px-2 rounded-lg transition-all shadow"
      title="Écouter sur Deezer"
    >
<div className="flex items-center gap-2">
  <img src="/images/deezer_logo.png" alt="Logo Deezer" className="h-6 w-6 object-contain" />
  <span>Écouter</span>
</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m9-9H3"
        />
      </svg>
    </button>
  );
}
