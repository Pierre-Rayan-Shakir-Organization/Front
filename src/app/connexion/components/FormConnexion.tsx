'use client';

import { useState, useRef } from "react";
import axios from 'axios';
import { useAuth } from "@/app/contexts/AuthContext.context.tsx";

export default function FormConnexion() {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault();

        const url = 'http://localhost:3000/login';
        try {
            const response = await axios.post(
                url, 
                {
                    email: inputEmail.current!.value,
                    password: inputPassword.current!.value
                }
            );

            // Vérifiez la structure de la réponse
            console.log("Réponse complète :", response.data);

            if (response.data && response.data.token) {
                console.log("token : response.data.token");
                console.log(response.data.token);

                // Appelez la fonction login avec le token
                login(response.data.token);

                if (response.status === 200) {
                    console.log("Le token a bien été enregistré dans le localstorage");
                    window.location.href = '/mesmusiques';
                }
            } else {
                setError("Erreur : Le token n'a pas été reçu");
                console.log("Erreur : Le token n'a pas été reçu");
            }

        } catch (error) {
            setError("Erreur connexion");
            console.log("Erreur lors de la connexion :", error);
        }
    }

    return (
        <form className="flex flex-col gap-3 p-10 w-full max-w-sm" onSubmit={handleForm}>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="daisy@site.com" 
                    ref={inputEmail}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input 
                    type="password" 
                    className="grow" 
                    placeholder="password" 
                    ref={inputPassword}
                />
            </label>

            <div className="w-full h-auto flex justify-center">
                <button className="w-full btn btn-outline btn-primary" type="submit">Connexion</button>
            </div>

            {error && <p>Erreur : {error}</p>}
        </form>
    );
}
