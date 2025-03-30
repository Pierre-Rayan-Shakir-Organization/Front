'use client';

import { useAuth } from "@/app/contexts/AuthContext.context.tsx";
import axios from 'axios';
import { CirclePlus } from 'lucide-react';

interface MusicInfos {
    artiste : string,
    titre : string,
    url_preview : string,
    url_cover_album_big : string
}

export default function AddButton({artiste, titre, url_preview, url_cover_album_big} : MusicInfos) {

    const {token} = useAuth();

    const handleAdd = async () => {
        const url : string  = 'http://localhost:3000/addMusic';
        try {
            await axios.post(
                url,
                {
                    artiste : artiste,
                    titre : titre,
                    url_preview : url_preview,
                    url_cover_album_big : url_cover_album_big
                },
                {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            onClick={handleAdd}
            className="btn btn-circle btn-secondary btn-sm"
        >
            <CirclePlus />
        </button>
    );

}