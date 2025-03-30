'use client';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext.tsx';

interface ListenButtonProps {
  titre: string;
  artiste: string;
  deezerLink: string;
}

export default function ListenButton({ titre, artiste, deezerLink }: ListenButtonProps) {
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
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Deezer_Logo_2019.svg"
        alt="Logo Deezer"
        className="h-4 w-4 object-contain"
      />
      <span>Écouter</span>
    </button>
  );
}
