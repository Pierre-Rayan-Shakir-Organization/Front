'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Cards from '../components/CardComponents/Cards';

export default function TableauAffichage() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [cardsData, setCardsData] = useState<any[]>([]);

    const fetchDeezerData = async (query: string = '') => {
        let url: string;

        // Si searchTerm est vide, afficher les 20 musiques les plus populaires
        if (query === '') {
            url = `https://api.deezer.com/chart`;
        } else {
            url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
        }

        try {
            const response = await axios.get(url);
            const musicData = query === '' ? response.data.tracks.data.slice(0, 20) : response.data.data.slice(0, 20);

            if (musicData.length === 0) {
                setError('Aucune donnée trouvée');
            } else {
                setCardsData(musicData);
                setError(''); // Réinitialiser l'erreur si des données sont trouvées
            }
        } catch (error) {
            setError('Erreur au moment de la requête');
            console.log(error);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchDeezerData(searchTerm);
        }, 300); // Délai de 300ms avant d'effectuer la requête

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    useEffect(() => {
        // Charger les musiques les plus populaires au montage du composant
        if (!searchTerm) {
            fetchDeezerData('');
        }
    }, []);

    return (
        <div className="h-auto w-full">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>

            <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-10 p-10">
                {cardsData.map((card, index) => (
                    <Cards
                        key={index}
                        cardId={card.id} // id de la musique dans Deezer
                        name_artist={card.artist.name} // nom de l'artiste
                        name_song={card.title} // titre de la musique
                        url_preview={card.preview} // lien de l'extrait audio
                        url_cover_album_big={card.album.cover_big} // image de l'album
                        nom="" // Si vous n'avez pas cette donnée, laissez-la vide ou gérez-la autrement
                        prenom="" // Si vous n'avez pas cette donnée, laissez-la vide ou gérez-la autrement
                        audioButton={true}
                        withBlock={true}
                        addButton={true}
                    />
                ))}
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
