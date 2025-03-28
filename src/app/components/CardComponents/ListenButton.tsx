'use client';

import { toast } from 'react-toastify';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { useUser } from '@/contexts/UserContext';

interface ListenButtonProps {
  titre: string;
  artiste: string;
  deezerLink: string;
}

export default function ListenButton({ titre, artiste, deezerLink }: ListenButtonProps) {
  const { userId } = useUser(); // ✅ appel du hook dans le composant

  if (!userId) return null; // ou afficher un bouton désactivé

  const handleClick = async () => {
    const date = new Date().toISOString();

    try {
      await axios.put('http://localhost:3000/calendar/add', {
        titre,
        artiste,
        date,
        userId,
      });

      toast.success('🎉 Événement ajouté à votre agenda !');
      window.open(deezerLink, '_blank');
    } catch (error) {
      console.error('Erreur lors de l’ajout à l’agenda :', error);
      toast.error('❌ Erreur lors de l’ajout à l’agenda.');
    }
  };

  return (
    <Button onClick={handleClick} className="text-xs">
      🎧 Écouter sur Deezer
    </Button>
  );
}
