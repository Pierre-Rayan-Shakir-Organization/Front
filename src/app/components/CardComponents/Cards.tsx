'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import CardButtons from "./CardButtons.tsx";
import DeleteButton from "./DeleteButton.tsx";
import AudioButton from "./AudioButton.tsx";
import AddButton from "./AddButton.tsx";
import ListenButton from "./ListenButton.tsx";
import AIButton from "./AIButton.tsx";


export interface InfosCard {
  cardId: any;
  name_artist: string;
  name_song: string;
  url_preview: string;
  url_cover_album_big: string;
  nom?: string;
  prenom?: string;
}

interface Buttons {
  audioButton?: boolean;
  deleteButton?: boolean;
  addButton?: boolean;
  aiButton?: boolean;
}

interface Sizes {
  size?: string;
  withBlock?: boolean;
}

interface ContainerStyle {
  containerStyle?: string; // Propriété optionnelle pour les styles du conteneur extérieur
}

type CardProps = InfosCard & Buttons & Sizes & ContainerStyle;

export default function Cards({
  cardId,
  name_artist,
  name_song,
  url_preview,
  url_cover_album_big,
  nom = " ",
  prenom = " ",
  audioButton = false,
  size = "h-full w-full",
  withBlock = false,
  deleteButton = false,
  addButton = false,
  aiButton = false,
  containerStyle = "w-[220px] h-[360px] bg-sky-950 rounded-2xl", // Style par défaut
}: CardProps) {
  const [isDragging, setIsDragging] = useState(false); // Gère l'état du drag
  const dragRef = useRef<HTMLDivElement | null>(null);

  // Fonction appelée lors du début du drag
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);

    // Permet de personnaliser l'image de drag (par défaut invisible)
    const rect = dragRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // Ajoute un style customisé à l'élément "dragImage"
      e.dataTransfer.setDragImage(dragRef.current!, offsetX, offsetY);
    }

    // Enregistre les données pour le transfert
    e.dataTransfer.setData(
      "cardData",
      JSON.stringify({
        cardId,
        name_artist,
        name_song,
        url_preview,
        url_cover_album_big,
        nom,
        prenom,
      })
    );
  };

  // Fonction appelée à la fin du drag
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={dragRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`card-container ${isDragging ? "opacity-50 scale-105" : ""}`} // Classe conditionnelle pendant le drag
    >
      {/* Affichage en mode block si nécessaire */}
      {withBlock ? (
        <div className={containerStyle}>
          <div className={`card glass ${size}`}>
            <figure className="h-50">
              <Image
                className="object-contain"
                src={url_cover_album_big}
                alt={`${name_artist} - ${name_song}`}
                width={500}
                height={500}
                objectFit="contain"
                priority
              />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-sm">{name_song}</h2>
              <p className="text-xs">{name_artist}</p>
              <p className="text-xs">
                liked by <em>{prenom} {nom}</em>
              </p>

              <CardButtons>
                {deleteButton && (
                  <DeleteButton
                    cardId={cardId}
                    onDelete={() => setIsDragging(false)}
                  />
                )}
                {addButton && (
                  <AddButton
                    titre={name_song}
                    artiste={name_artist}
                    url_preview={url_preview}
                    url_cover_album_big={url_cover_album_big}
                  />
                )}
                {audioButton && (
                  <AudioButton url_preview={url_preview} cardId={cardId} />
                )}
                {aiButton && (
                  <AIButton 
                    musicId={cardId} 
                    name_artist={name_artist}
                    name_song={name_song}
                    url_cover_album_big={url_cover_album_big}
                  />
                )}
                  <ListenButton
                    titre={name_song}
                    artiste={name_artist}
                    deezerLink={`https://www.deezer.com/search/${encodeURIComponent(name_artist + " " + name_song)}`}
                    url_preview={url_preview}
                    url_cover_album_big={url_cover_album_big}
                  />


              </CardButtons>
            </div>
          </div>
        </div>
      ) : (
        // Affichage classique sans block
        <div className={`card glass ${size}`}>
          <figure className="h-50">
            <Image
              className="object-contain"
              src={url_cover_album_big}
              alt={`${name_artist} - ${name_song}`}
              width={500}
              height={500}
              objectFit="contain"
              priority
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-sm">{name_song}</h2>
            <p className="text-xs">{name_artist}</p>
            <p className="text-xs">
              liked by <em>{prenom} {nom}</em>
            </p>

            <CardButtons>
              {deleteButton && (
                <DeleteButton
                  cardId={cardId}
                  onDelete={() => setIsDragging(false)}
                />
              )}
              {addButton && (
                <AddButton
                  titre={name_song}
                  artiste={name_artist}
                  url_preview={url_preview}
                  url_cover_album_big={url_cover_album_big}
                />
              )}
              {audioButton && (
                <AudioButton url_preview={url_preview} cardId={cardId} />
              )}
              {aiButton && (
                <AIButton 
                  musicId={cardId} 
                  name_artist={name_artist}
                  name_song={name_song}
                  url_cover_album_big={url_cover_album_big}
                />
              )}
            </CardButtons>
          </div>
        </div>
      )}
    </div>
  );
}
