"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext.context.tsx';
import axios from 'axios';
import RechercherAmis from './componants/RechercheAmis.tsx';

interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  friendship_status: 'friends' | 'following' | 'followed_by' | 'not_following';
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

const AddFriendsPage = () => {
  const { token } = useAuth();
  const [searchResults, setSearchResults] = useState<Utilisateur[]>([]);
  const [following, setFollowing] = useState<Utilisateur[]>([]);

  useEffect(() => {
    if (token) {
      fetchFollowing();
    }
  }, [token]);

  const fetchFollowing = async () => {
    if (!token) return;
    const data = await fetchData('/getFollowing', token);
    if (data) setFollowing(data);
  };

  const handleFollow = async (userId: number) => {
    if (!token) return;
    try {
      await axios.post(`/follow/${userId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchFollowing();
      updateSearchResults(userId, 'following');
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
      updateSearchResults(userId, 'not_following');
    } catch (error) {
      console.error("Erreur lors du désabonnement", error);
    }
  };

  const updateSearchResults = (userId: number, newStatus: 'friends' | 'following' | 'followed_by' | 'not_following') => {
    setSearchResults(prevResults => 
      prevResults.map(user => 
        user.id === userId ? { ...user, friendship_status: newStatus } : user
      )
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ajout d'Amis</h1>
      <RechercherAmis 
        searchResults={searchResults} 
        setSearchResults={setSearchResults} 
        following={following} 
        handleFollow={handleFollow} 
        handleUnfollow={handleUnfollow} 
      />
    </div>
  );
};

export default AddFriendsPage;
