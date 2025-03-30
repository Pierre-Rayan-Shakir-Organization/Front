'use client';

import { useState, useEffect } from "react";
import Cards from "../components/CardComponents/Cards";
import axios from "axios";
import NavbarWithToken from "../layoutComponents/NavbarWithToken";


export const fetchDataDeezer = async (artist: string, track: string) => {
  const query = `artist:"${artist}" track:"${track}"`;
  const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  const data = response.data.data[0];
  return {
    name_artist: data.artist.name,
    name_song: data.title,
    url_preview: data.preview,
    url_cover_album_big: data.album.cover_big,
  };
};

const fetchData = async () => {
  const url = "http://localhost:3000/getRandomMusic";
  try {
    const response = await axios.get(url, { headers: { "Cache-Control": "no-cache" } });
    return response.data.musique;
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    throw new Error("Failed to fetch music data");
  }
};

export default function Page() {
  const [musique, setMusique] = useState<any>(null);
  const [musiqueDeezer, setMusiqueDeezer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const loadRandomCard = async () => {
    setError(null); // Reset error state
    try {
      const randomMusic = await fetchData();
      if (!randomMusic || !randomMusic.artiste || !randomMusic.titre) {
        setError("Aucune musique disponible.");
        return;
      }
      const deezerData = await fetchDataDeezer(randomMusic.artiste, randomMusic.titre);
      setMusique(randomMusic);
      setMusiqueDeezer(deezerData);
    } catch (err) {
      console.error("Erreur lors de la récupération des données :", err);
      setError("Impossible de récupérer les données.");
    }
  };

  useEffect(() => {
    loadRandomCard();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!musique || !musiqueDeezer) {
    return <div>Chargement...</div>;
  }

  return (
    <>
    <NavbarWithToken />
    <div className="p-10 flex flex-col gap-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
        Découverte musicale
      </h1>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <Cards
            cardId={musique.id}
            name_artist={musiqueDeezer.name_artist}
            name_song={musiqueDeezer.name_song}
            url_preview={musiqueDeezer.url_preview}
            url_cover_album_big={musiqueDeezer.url_cover_album_big}
            prenom={musique.prenom}
            nom={musique.nom}
            audioButton={true}
            size="w-72"
          />
          <div>
            <button className="btn btn-primary mt-6" onClick={loadRandomCard}>
              Afficher une autre carte
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
