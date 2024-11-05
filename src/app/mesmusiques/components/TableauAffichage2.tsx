"use client";

import Cards from "@/app/components/CardComponents/Cards";
import { useAuth } from "@/app/contexts/AuthContext.context";
import { useEffect, useState } from "react";
import axios from 'axios';

interface Musique {
    id: number;
    artiste: string;
    titre: string;
    url_preview: string | null;
    url_cover_album_big: string | null;
}

interface Utilisateur {
    nom: string;
    prenom: string;
}

const fetchData = async (token: string) => {
    const url: string = 'http://localhost:3000/getMusic/';
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default function TableauAffichage2() {
    const { token } = useAuth();
    const [musiques, setMusiques] = useState<Musique[]>([]);
    const [utilisateur, setUtilisateur] = useState<Utilisateur | null>(null);

    useEffect(() => {
        const getMusiques = async () => {
            if (token) {
                const data = await fetchData(token);
                if (data) {
                    setMusiques(data.musiques);
                    setUtilisateur(data.utilisateur);
                }
            }
        };
        getMusiques();
    }, [token]);


    return (
        <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-10 p-10">
            {musiques.map((musique) => (
                <Cards
                    key={musique.id}
                    cardId={musique.id}
                    name_artist={musique.artiste}
                    name_song={musique.titre}
                    url_preview={musique.url_preview || ''}
                    url_cover_album_big={musique.url_cover_album_big || ''}
                    nom={utilisateur?.nom || ''}
                    prenom={utilisateur?.prenom || ''}
                    audioButton={true}
                    withBlock={true}
                    deleteButton={true}
                />
            ))}
        </div>
    );
}
