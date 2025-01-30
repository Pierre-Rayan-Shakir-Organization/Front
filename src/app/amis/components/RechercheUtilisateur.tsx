'use client';

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  status: "not_friends" | "pending" | "requested" | "friends";
}

interface RechercheUtilisateurProps {
  setSearchResults: (results: Friend[]) => void;
}

const RechercheUtilisateur: React.FC<RechercheUtilisateurProps> = ({ setSearchResults }) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  const handleSearch = async () => {
    if (prenom.trim() === "" || nom.trim() === "") {
      console.warn("⚠️ Veuillez saisir un prénom et un nom.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("❌ Aucun token trouvé, l'utilisateur n'est peut-être pas connecté.");
        return;
      }

      const headers = { Authorization: `Bearer ${token}` };

      // 🔍 Requête API avec prénom et nom exacts
      const response = await axios.get(`${API_URL}/searchUser?prenom=${encodeURIComponent(prenom)}&nom=${encodeURIComponent(nom)}`, { headers });

      console.log("🔍 Résultats API :", response.data.results);

      if (response.data.results && response.data.results.length > 0) {
        setSearchResults(response.data.results.map((user: any) => ({
          ...user,
          status: user.friendship_status as "not_friends" | "pending" | "requested" | "friends",
        })));
      } else {
        console.warn("⚠️ Aucun utilisateur trouvé !");
        setSearchResults([]);  // ✅ Réinitialisation des résultats en cas d'absence de correspondance
      }

    } catch (error) {
      console.error("❌ Erreur lors de la recherche :", error);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Prénom"
          className="p-2 border border-gray-300 rounded w-full"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom"
          className="p-2 border border-gray-300 rounded w-full"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default RechercheUtilisateur;
