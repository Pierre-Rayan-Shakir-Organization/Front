'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarWithToken from '../layoutComponents/NavbarWithToken.tsx';
import Cards from '../components/CardComponents/Cards.tsx';

export default function MonHistorique() {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [evenements, setEvenements] = useState<any[]>([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken) setToken(storedToken);
    if (storedUserId) setUserId(Number(storedUserId));
  }, []);

  useEffect(() => {
    const fetchEcoutes = async () => {
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:3000/calendar/list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEvenements(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des écoutes :", error);
      }
    };

    fetchEcoutes();
  }, [userId, token]);

  const parseDescription = (description: string) => {
    const artiste = description?.match(/Artiste: (.*?) \|/)?.[1] || '';
    const cover = description?.match(/Cover: (.*?) \|/)?.[1] || '';
    const preview = description?.match(/Preview: (.*)/)?.[1] || '';
    return { artiste, cover, preview };
  };

  return (
    <>
      <NavbarWithToken />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">🎧 Historique des écoutes</h1>

        {evenements.length === 0 ? (
          <p>Aucun événement trouvé.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-3 px-4">
{evenements
  .filter((event) => !!event.description && event.description.includes("Cover:"))
  .slice()
  .reverse()
  .slice(0, 15)
  .map((event, index) => {
    const titre = event.summary?.replace("Écoute de ", "") || "Inconnu";
    const { artiste, cover, preview } = parseDescription(event.description);
    const date = new Date(event.start.dateTime).toLocaleString('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'short',
    });

    return (
      <div key={index} className="relative flex flex-col items-center">
        <span className="absolute top-0 left-0 bg-purple-700 text-white text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg font-bold z-10">
          #{index + 1}
        </span>

        <Cards
          cardId={index}
          name_artist={artiste}
          name_song={titre}
          url_cover_album_big={cover || '/images/default_cover.jpg'}
          url_preview={preview || ''}
          withBlock={true}
          audioButton={true}
          size="h-[270px] w-[170px]"
          containerStyle="w-[170px] h-[300px] bg-slate-800 rounded-xl"
        />

        {/* 🕒 Affichage de la date sous la carte */}
        <div className="mt-2 text-[11px] text-gray-300 italic flex items-center gap-1">
  <span className="text-lg">🕒</span>
  {date}
</div>
      </div>
    );
  })}


          </div>
        )}
      </div>
    </>
  );
}
