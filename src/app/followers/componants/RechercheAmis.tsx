"use client";

import { useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext.context.tsx';
import axios from 'axios';

interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
}

const fetchData = async (url: string, token: string) => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    return null;
  }
};

const RechercherAmis = ({ searchResults, setSearchResults, following, handleFollow, handleUnfollow }: {
  searchResults: Utilisateur[];
  setSearchResults: (users: Utilisateur[]) => void;
  following: Utilisateur[];
  handleFollow: (id: number) => void;
  handleUnfollow: (id: number) => void;
}) => {
  const { token } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim() || !token) return;
    setLoading(true);
    const data = await fetchData(`/searchUsers?prenom=${searchQuery}`, token);
    if (data) setSearchResults(data);
    setLoading(false);
  };

  return (
    <div>
            <div className="p-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
            </h1>        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
          {loading ? "Recherche..." : "Rechercher"}
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4">Résultats de la recherche</h2>
        {searchQuery && searchResults.length === 0 && <p>Aucun utilisateur trouvé.</p>}
        {searchResults.map(user => (
          <div key={user.id} className="flex justify-between items-center p-2 border-b">
            <span>{user.prenom} {user.nom}</span>
            {following.some(f => f.id === user.id) ? (
              <button className="btn btn-sm btn-error" onClick={() => handleUnfollow(user.id)}>Se désabonner</button>
            ) : (
              <button className="btn btn-sm btn-success" onClick={() => handleFollow(user.id)}>Suivre</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechercherAmis;
