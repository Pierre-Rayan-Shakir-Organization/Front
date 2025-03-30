'use client';

import { useEffect, useState } from 'react';
import Cards from '../components/CardComponents/Cards.tsx';
import NavbarWithToken from '../layoutComponents/NavbarWithToken.tsx';
interface Music {
    id: number;
    artiste: string;
    titre: string;
    url_preview: string;
    url_cover_album_big: string;
    likes_count: number;
}

export default function PopularMusic() {
    const [musicList, setMusicList] = useState<Music[]>([]);
    const [period, setPeriod] = useState<'day' | 'week' | 'month'>('week');

    useEffect(() => {
        async function fetchPopularMusic() {
            const response = await fetch(`http://localhost:3000/popularMusic?period=${period}`);
            const data: Music[] = await response.json(); // 3️⃣ Ajout du type Music[]
            setMusicList(data);
        }
        fetchPopularMusic();
    }, [period]);

    return (    
        <>
        <NavbarWithToken />
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Musiques Populaires</h1>
            <select 
                onChange={(e) => setPeriod(e.target.value as 'day' | 'week' | 'month')} 
                value={period} 
                className="mb-4 p-2 border rounded"
            >
                <option value="day">Aujourd'hui</option>
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {musicList.map(music => (
                    <Cards
                        key={music.id}
                        cardId={music.id}
                        name_artist={music.artiste}
                        name_song={music.titre}
                        url_preview={music.url_preview}
                        url_cover_album_big={music.url_cover_album_big}
                        withBlock={true}
                        audioButton={true}
                        addButton={true}
                    />
                ))}
            </div>
        </div>
        </>
    );
}
