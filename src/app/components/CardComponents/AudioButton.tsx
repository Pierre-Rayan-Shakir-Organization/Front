'use client';

import { AudioLines, Play } from "lucide-react";
import { useRef, useEffect } from "react";
import { useAudio } from "@/app/contexts/AudioContext.context.tsx";

// 1. Ce composant représente un bouton qui contrôle la lecture audio d'une carte.
//    `url_preview` est le lien du fichier audio, et `cardId` est un identifiant unique pour chaque carte.
export default function AudioButton({ url_preview, cardId }: { url_preview: string, cardId: string }) {

    // 2. `useAudio` est utilisé pour accéder au contexte audio.
    //    Cela nous donne accès à l'ID de la carte actuellement active (`activeAudioId`)
    //    et à la fonction pour changer cette carte (`setActiveAudioId`).
    const { activeAudioId, setActiveAudioId } = useAudio();
    
    // 3. Création d'une référence pour l'élément audio.
    //    Cela permet d'accéder à l'élément DOM `<audio>` directement.
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // 4. Lorsque le bouton Play est cliqué, cette fonction est appelée.
    //    Elle démarre la lecture de l'audio pour la carte courante et met à jour le contexte 
    //    avec l'ID de la carte active, ce qui désactivera les autres cartes.
    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setActiveAudioId(cardId); // Définir cette carte comme active
        }
    };

    // 5. Cette fonction est appelée pour mettre en pause l'audio.
    //    Elle est déclenchée par un clic sur le bouton Pause.
    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setActiveAudioId(null); // Aucune carte n'est active
        }
    };


    useEffect(() => {
        const audioElement = audioRef.current;

        // Cette fonction est déclenchée lorsque l'audio se termine
        const handleEnded = () => {
            setActiveAudioId(null); // Aucune carte n'est active
        };

        // Ajout de l'événement 'ended' lorsque le composant est monté
        if (audioElement) {
            audioElement.addEventListener('ended', handleEnded);
        }

        // Nettoyage de l'événement 'ended' lorsque le composant est démonté
        return () => {
            if (audioElement) {
                audioElement.removeEventListener('ended', handleEnded);
            }
        };
    }, [setActiveAudioId]);


    // 6. Utilisation de `useEffect` pour surveiller les changements de `activeAudioId`.
    //    Si `activeAudioId` change et que ce n'est pas l'ID de cette carte, alors l'audio est mis en pause.
    useEffect(() => {
        if (audioRef.current && activeAudioId !== cardId) {
            audioRef.current.pause(); // Pause l'audio si une autre carte est activée
        }
    }, [activeAudioId, cardId]);

    return (
        <>
                {
                    activeAudioId === cardId ? 
                    <button 
                    className="btn btn-circle btn-secondary btn-sm"
                    onClick={handlePause}
                    >
                        <AudioLines className="w-4 h-4" />
                    </button>
                    :
                    <button 
                    className="btn btn-circle btn-primary btn-sm"
                    onClick={handlePlay}
                    >
                        <Play className="w-4 h-4" />
                    </button>
                }        
                            {/* Élément audio qui lit le fichier audio */}
            <audio ref={audioRef} src={url_preview} />   
        </>
    );
}
