'use client';

import FormConnexion from "./components/FormConnexion";
import FormulaireInscription from "../components/premiereSection/FormulaireInscription";
import { useState } from "react";
import Navbar from "../layoutComponents/Navbar.tsx";

export default function ConnexionPage() {
    const [choix, setChoix] = useState<boolean>(true);

    const changeToConnexion = () => {
        if (choix) {
            setChoix(false);
        }
    }

    const changeToInscription = () => {
        if (!choix) {
            setChoix(true);
        }
    }

    return (
        
        <>
        <Navbar />
        
        <div className="w-full min-h-[calc(100vh-4.5rem)] flex flex-row justify-center items-center gap-10 flex-wrap">
            <div className="w-2/5 h-auto text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    Bienvenue sur FiveMusics
                </h2>
                <p className="text-lg">
                    Découvrez, partagez et connectez-vous à travers la musique que vous aimez. <br />
                    <span className="text-pink-500 font-semibold">
                        <a onClick={changeToConnexion} className="cursor-pointer">Créez un compte</a>
                    </span> pour explorer un monde de découvertes musicales et de nouvelles rencontres.
                </p>
                <p className="text-lg mt-4">
                    <span className="text-purple-500 font-semibold">
                        <a onClick={changeToInscription} className="cursor-pointer">Déjà membre ?</a>
                    </span> Connectez-vous pour accéder à vos playlists personnalisées et découvrir ce que vos amis écoutent.
                </p>
            </div>

            {choix ? <FormConnexion /> : <FormulaireInscription />}
        </div>
        </>
    );
}
