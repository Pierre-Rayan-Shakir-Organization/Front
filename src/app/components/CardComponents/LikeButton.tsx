'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '@/app/contexts/AuthContext.context.tsx';

interface LikeButtonProps {
    musicId: number;
    initialLikes: number; // ✅ Ajout de `initialLikes` dans l'interface
}

export default function LikeButton({ musicId, initialLikes }: LikeButtonProps) {
    const { token } = useAuth();
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        async function fetchLikes() {
            const response = await fetch(`http://localhost:3000/getMusicLikes/${musicId}`);
            const data = await response.json();
            setLikes(data.likes_count);
            setLiked(data.user_has_liked);
        }
        fetchLikes();
    }, [musicId]);

    const handleLike = async () => {
        if (!token) {
            alert("Vous devez être connecté pour liker !");
            return;
        }

        const response = await fetch(`http://localhost:3000/likeMusic/${musicId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log("Réponse du serveur :", result); // ✅ Ajout du log pour voir la réponse

        if (result.message.includes('likée')) {
            setLikes(likes + 1);
            setLiked(true);
        } else {
            setLikes(likes - 1);
            setLiked(false);
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`btn btn-circle ${liked ? 'btn-error' : 'btn-outline'} btn-sm`}
        >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span className="ml-1">{likes}</span>
        </button>
    );
}
