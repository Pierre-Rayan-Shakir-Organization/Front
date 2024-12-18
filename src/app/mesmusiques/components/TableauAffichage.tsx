"use client";

import Cards from "@/app/components/CardComponents/Cards.tsx";
import { useAuth } from "@/app/contexts/AuthContext.context.tsx";
import { useEffect, useState } from "react";
import axios from 'axios';
import { InfosCard } from "@/app/components/CardComponents/Cards.tsx";
import { fetchDataDeezer } from "@/app/components/deuxiemeSection/TextePresentation.tsx";

export default function TableauAffichage() {
    const { token } = useAuth();
    const [cardsData, setCardsData] = useState<InfosCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        const url: string = 'http://localhost:3000/getMusic/';
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const musiques = response.data.musiques;
            const utilisateur = response.data.utilisateur;

            // Ne pas réinitialiser complètement les cardsData, ajouter chaque card dès que possible
            const addCard = async (music: any) => {
                try {
                    const deezerData = await fetchDataDeezer(music.artiste, music.titre);
                    if (deezerData) {
                        const newCard = {
                            cardId: music.id.toString(),
                            name_artist: deezerData.name_artist,
                            name_song: deezerData.name_song,
                            url_preview: deezerData.url_preview,
                            url_cover_album_big: deezerData.url_cover_album_big,
                            nom: utilisateur.nom,
                            prenom: utilisateur.prenom
                        };
                        console.log(deezerData);
                        setCardsData(prevData => [...prevData, newCard]);
                    }
                } catch (deezerError) {
                    console.error("Erreur lors de la récupération des données Deezer", deezerError);
                }
            };

            musiques.forEach(addCard);

        } catch (error) {
            setError('Une erreur est survenue lors de la récupération des musiques');
            console.error('Erreur:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchData();
        } else {
            console.log("Token non disponible, en attente de sa définition...");
        }
    }, [token]);

    return (
        <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-10 p-10">
            {cardsData.map(card => (
                <Cards
                    key={card.cardId}
                    cardId={card.cardId}
                    name_artist={card.name_artist}
                    name_song={card.name_song}
                    url_preview={card.url_preview}
                    url_cover_album_big={card.url_cover_album_big}
                    nom={card.nom}
                    prenom={card.prenom}
                    audioButton={true}
                    withBlock={true}
                    deleteButton={true}
                />
            ))}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
