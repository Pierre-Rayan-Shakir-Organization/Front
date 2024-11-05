'use client';

import Image from "next/image"
import AudioButton from "./AudioButton"
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import CardButtons from "./CardButtons";
import AddButton from "./AddButton";

export interface InfosCard {
    cardId : any,
    name_artist : string,
    name_song : string,
    url_preview : string,
    url_cover_album_big : string,
    nom? : string,
    prenom? : string
}

interface Buttons {
    audioButton? : boolean,
    deleteButton? : boolean,
    addButton? : boolean
}

interface Sizes {
    size? : string,
    withBlock? : boolean
}

type CardProps = InfosCard & Buttons & Sizes;

export default function Cards(
    {
        cardId,
        name_artist,
        name_song,
        url_preview,
        url_cover_album_big,
        nom = "raffoul",
        prenom = "pierre",
        audioButton = false,
        size = 'h-full w-full',
        withBlock = false,
        deleteButton = false,
        addButton = false
    } : CardProps
) {

    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const handleDelete = (deletedCardId: string) => {
        setIsDeleted(true); // Hide card when deleted
    };

    if (isDeleted) {return(null);}

    return (

        <>
            {
                withBlock ?
                <div className="w-[220px] h-[360px] bg-sky-950 rounded-2xl">
                <div className={`card glass ${size}`}>

                <figure className="h-50">
                    <Image 
                    className="object-contain"
                    src={url_cover_album_big}
                    alt={name_artist + ' ' + name_song}
                    width={500}
                    height={500}
                    objectFit="contain" // Preserve aspect ratio and contain within the parent
                    priority // Optional: Set to true for faster loading of the first image
                    />
                </figure>

                <div className="card-body p-4">
                    <h2 className="card-title text-sm">{name_song}</h2>
                    <p className="text-xs">{name_artist}</p>
                    <p className="text-xs">liked by <em>{prenom +' '+ nom}</em></p>

                    <CardButtons>

                        {
                            deleteButton ?
                            <DeleteButton
                                cardId={cardId}
                                onDelete={handleDelete} // Pass the handleDelete function to DeleteButton
                            />
                            : null
                        }

                        {
                            addButton ?
                            <AddButton 
                                titre={name_song}
                                artiste={name_artist}
                                url_preview={url_preview}
                                url_cover_album_big={url_cover_album_big}
                            />
                            : null
                        }

                        {
                            audioButton ? 
                            <AudioButton 
                            url_preview={url_preview}
                            cardId={cardId}
                            /> 
                            : null
                        }

                        
                    </CardButtons>

                </div>

            </div>
            </div>

            :

            <div className={`card glass ${size}`}>

                <figure className="h-50">
                    <Image 
                    className="object-contain"
                    src={url_cover_album_big}
                    alt={name_artist + ' ' + name_song}
                    width={500}
                    height={500}
                    objectFit="contain" // Preserve aspect ratio and contain within the parent
                    priority // Optional: Set to true for faster loading of the first image
                    />
                </figure>

                <div className="card-body p-4">
                    <h2 className="card-title text-sm">{name_song}</h2>
                    <p className="text-xs">{name_artist}</p>
                    <p className="text-xs">liked by <em>{prenom +' '+ nom}</em></p>

                    <CardButtons>

                        {
                            deleteButton ?
                            <DeleteButton
                                cardId={cardId}
                                onDelete={handleDelete} // Pass the handleDelete function to DeleteButton
                            />
                            : null
                        }

                        {
                            addButton ?
                            <AddButton 
                                titre={name_song}
                                artiste={name_artist}
                                url_preview={url_preview}
                                url_cover_album_big={url_cover_album_big}
                            />
                            : null
                        }

                        {
                            audioButton ? 
                            <AudioButton 
                            url_preview={url_preview}
                            cardId={cardId}
                            /> 
                            : null
                        }

                        
                    </CardButtons>

                </div>

            </div>

            }

        </>

            

    );
}