'use client';

import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function FormulaireInscription() {
    const [prenom, setPrenom] = useState<string>('');
    const [nom, setNom] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [sexe, setSexe] = useState<string>('');
    //const router = useRouter();

    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            prenom : prenom,
            nom : nom,
            email : email,
            password : password,
            sexe : sexe.substring(0, 1)
        };

        try {
            const url = "http://localhost:3000/signup";
            await axios.post(url, data);
            //router.push('/connexion');
            window.location.href = '/connexion';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="flex flex-col gap-3 p-10 w-full max-w-sm" onSubmit={handleForm}>
            <label className="input input-bordered flex items-center gap-2">
                Prenom
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="Le"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)} 
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                Nom
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="goat" 
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                Email
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="daisy@site.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <select 
                className="select select-bordered w-full max-w-xs"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
            >
                <option value="" disabled>Sexe</option>
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
            </select>

            <div className="w-full h-auto flex justify-center">
                <button className="w-full btn btn-outline btn-secondary">Inscription</button>
            </div>
        </form>
    );
}
