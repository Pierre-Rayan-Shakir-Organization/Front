'use client';

import axios from "axios";
import { useState, useEffect } from "react";
import FriendsList from "./componants/FriendList.tsx";
import RechercheUtilisateur from "./componants/RechercheUtilisateur.tsx";
import NavbarWithToken from "../layoutComponents/NavbarWithToken.tsx";

const API_URL = "http://localhost:3000";

const FriendsPage = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token JWT manquant");

      const headers = { Authorization: `Bearer ${token}` };

      const resFollowers = await axios.get(`${API_URL}/getFollowers`, { headers });
      const resFollowing = await axios.get(`${API_URL}/getFollowing`, { headers });
      const resPending = await axios.get(`${API_URL}/getFollowPending`, { headers });
      const resSentPending = await axios.get(`${API_URL}/getFollowersPending`, { headers });

      setFollowers(resFollowers.data.followers.map((friend: any) => ({ ...friend, status: "following_back" })));
      setFollowing(resFollowing.data.following.map((friend: any) => ({ ...friend, status: "following" })));
      setPendingRequests(resPending.data.map((friend: any) => ({ ...friend, status: "followed_by" }))); // 🔥 Correction ici
      setSentRequests(resSentPending.data.map((friend: any) => ({ ...friend, status: "pending" }))); 

    } catch (error) {
      console.error("❌ Erreur lors du chargement des amis:", error);
    }
};



  return (
<>
            <NavbarWithToken />
    
            <div className="p-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
              Cercle d'amis
            </h1>

      {/* 🔥 Recherche d'utilisateurs */}
      <RechercheUtilisateur setSearchResults={setSearchResults} />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <FriendsList title="Followers" friends={followers} refreshFriends={fetchFriends} />
        <FriendsList title="Following" friends={following} refreshFriends={fetchFriends} />
        <FriendsList title="Demandes reçues en attente" friends={pendingRequests} refreshFriends={fetchFriends} />
        <FriendsList title="Demandes envoyées en attente" friends={sentRequests} refreshFriends={fetchFriends} /> 
      </div>

      {/* 🔥 Affichage des résultats de recherche */}
      {searchResults.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Résultats de la recherche</h2>
          <FriendsList title="Résultats" friends={searchResults} refreshFriends={fetchFriends} />
        </div>
      )}
    </div>
    </>
  );
};

export default FriendsPage;
