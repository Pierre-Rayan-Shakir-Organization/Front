'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Utilisateur {
    id: number;
    prenom: string;
    nom: string;
    email?: string;
}

const API_BASE_URL = "http://localhost:3000";

export default function GestionAmis() {
    const [amis, setAmis] = useState<Utilisateur[]>([]);
    const [demandesRecues, setDemandesRecues] = useState<Utilisateur[]>([]);
    const [demandesEnvoyees, setDemandesEnvoyees] = useState<Utilisateur[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [searchResults, setSearchResults] = useState<Utilisateur[]>([]);
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    useEffect(() => {
        if (token) {
            fetchData();
        } else {
            console.error("Token manquant, vérifiez l'authentification.");
        }
    }, []);

    const fetchData = async () => {
        try {
            if (!token) throw new Error("Token non disponible");
            
            const [amisRes, recuesRes, envoyeesRes] = await Promise.all([
                axios.get(`${API_BASE_URL}/getAmis`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE_URL}/getDemandesRecues`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_BASE_URL}/demandesEnvoyees`, { headers: { Authorization: `Bearer ${token}` } }),
            ]);

            setAmis(amisRes.data);
            setDemandesRecues(recuesRes.data.demandesRecues);
            setDemandesEnvoyees(envoyeesRes.data.demandesEnvoyees);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        const words = value.split(" ");
        setPrenom(words[0] || '');
        setNom(words[1] || '');
    };

    const searchUsers = async () => {
        try {
            if (!token) throw new Error("Token non disponible");
            
            const res = await axios.get(`${API_BASE_URL}/searchUser?prenom=${prenom}&nom=${nom}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSearchResults(res.data.results);
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
        }
    };

    const envoyerDemande = async (amiId: number) => {
        try {
            await axios.post(`${API_BASE_URL}/envoyerDemande/${amiId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
            fetchData();
        } catch (error) {
            console.error("Erreur lors de l'envoi de la demande");
        }
    };

    const accepterDemande = async (amiId: number) => {
        try {
            await axios.put(`${API_BASE_URL}/accepterDemande/${amiId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
            fetchData();
        } catch (error) {
            console.error("Erreur lors de l'acceptation de la demande");
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Gestion des Amis</h1>
            <input
                type="text"
                placeholder="Rechercher un utilisateur"
                className="border p-2 w-full mb-4"
                onChange={handleSearchInput}
            />
            <button onClick={searchUsers} className="bg-blue-500 text-white px-4 py-1 rounded mb-4">Rechercher</button>
            
            <h2 className="text-xl font-semibold">Résultats de recherche</h2>
            {searchResults.map(user => (
                <div key={user.id} className="flex justify-between p-2 border-b">
                    <span>{user.prenom} {user.nom}</span>
                    <button onClick={() => envoyerDemande(user.id)} className="bg-blue-500 text-white px-4 py-1 rounded">Demander en ami</button>
                </div>
            ))}
            
            <h2 className="text-xl font-semibold mt-6">Amis</h2>
            {amis.map(ami => (
                <div key={ami.id} className="flex justify-between p-2 border-b">
                    <span>{ami.prenom} {ami.nom}</span>
                    <button className="bg-green-500 text-white px-4 py-1 rounded">Amis</button>
                </div>
            ))}
            
            <h2 className="text-xl font-semibold mt-6">Demandes en attente</h2>
            {demandesEnvoyees.map(demande => (
                <div key={demande.id} className="flex justify-between p-2 border-b">
                    <span>{demande.prenom} {demande.nom}</span>
                    <button className="bg-gray-500 text-white px-4 py-1 rounded">En attente</button>
                </div>
            ))}
            
            <h2 className="text-xl font-semibold mt-6">Demandes reçues</h2>
            {demandesRecues.map(demande => (
                <div key={demande.id} className="flex justify-between p-2 border-b">
                    <span>{demande.prenom} {demande.nom}</span>
                    <button onClick={() => accepterDemande(demande.id)} className="bg-yellow-500 text-white px-4 py-1 rounded">Accepter</button>
                </div>
            ))}
        </div>
    );
}
