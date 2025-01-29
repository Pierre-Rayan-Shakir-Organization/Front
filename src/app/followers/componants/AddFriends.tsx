"use client";

import { useState, useEffect } from 'react';
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

const AddFriends = () => {
  const { token } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Utilisateur[]>([]);
  const [followers, setFollowers] = useState<Utilisateur[]>([]);
  const [following, setFollowing] = useState<Utilisateur[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchFollowers();
      fetchFollowing();
    }
  }, [token]);

  const fetchFollowers = async () => {
    if (!token) return;
    const data = await fetchData('/getFollowers', token);
    if (data) setFollowers(data);
  };

  const fetchFollowing = async () => {
    if (!token) return;
    const data = await fetchData('/getFollowing', token);
    if (data) setFollowing(data);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim() || !token) return;
    setLoading(true);
    const data = await fetchData(`/searchUsers?prenom=${searchQuery}`, token);
    if (data) setSearchResults(data);
    setLoading(false);
  };

  const handleFollow = async (userId: number) => {
    if (!token) return;
    try {
      await axios.post(`/follow/${userId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchFollowing();
    } catch (error) {
      console.error("Erreur lors du suivi", error);
    }
  };

  const handleUnfollow = async (userId: number) => {
    if (!token) return;
    try {
      await axios.delete(`/unfollow/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchFollowing();
    } catch (error) {
      console.error("Erreur lors du désabonnement", error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ajout d'Amis</h1>
      
      <div className="flex gap-2 mb-4">
        <input
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
        {searchResults.length === 0 && <p>Aucun utilisateur trouvé.</p>}
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
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Utilisateurs Suivis</h2>
        {following.length === 0 && <p>Vous ne suivez personne.</p>}
        {following.map(user => (
          <div key={user.id} className="flex justify-between items-center p-2 border-b">
            <span>{user.prenom} {user.nom}</span>
            <button className="btn btn-sm btn-error" onClick={() => handleUnfollow(user.id)}>Se désabonner</button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Vos Followers</h2>
        {followers.length === 0 && <p>Aucun abonné pour le moment.</p>}
        {followers.map(user => (
          <div key={user.id} className="flex justify-between items-center p-2 border-b">
            <span>{user.prenom} {user.nom}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddFriends;
