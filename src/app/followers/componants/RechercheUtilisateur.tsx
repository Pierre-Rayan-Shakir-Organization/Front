'use client';

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  status: "not_following" | "pending" | "following_back" | "following" | "followed_by";
}

interface RechercheUtilisateurProps {
  setSearchResults: (results: Friend[]) => void;
}

const RechercheUtilisateur: React.FC<RechercheUtilisateurProps> = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("❌ Aucun token trouvé, l'utilisateur n'est peut-être pas connecté.");
        return;
      }

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.get(`${API_URL}/searchUsers?prenom=${encodeURIComponent(searchTerm)}&nom=`, { headers });
      console.log("🔍 Résultats de la recherche :", response.data.results);

      setSearchResults(
        response.data.results.map((user: any) => ({
          ...user,
          status: user.friendship_status as "not_following" | "pending" | "following_back" | "following" | "followed_by",
        }))
      );
    } catch (error) {
      console.error("❌ Erreur lors de la recherche :", error);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          className="p-2 border border-gray-300 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default RechercheUtilisateur;
