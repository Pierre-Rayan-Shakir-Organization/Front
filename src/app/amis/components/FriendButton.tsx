'use client';

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

interface FriendButtonProps {
  userId: number;
  status: "not_friends" | "pending" | "requested" | "friends";
  refreshFriends: () => void;
}

const FriendButton: React.FC<FriendButtonProps> = ({ userId, status, refreshFriends }) => {
  const [buttonState, setButtonState] = useState(status);

  useEffect(() => {
    setButtonState(status);
  }, [status]);

  const handleAction = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token JWT manquant");

      const headers = { Authorization: `Bearer ${token}` };

      if (buttonState === "not_friends") {
        await axios.post(`${API_URL}/envoyerDemande/${userId}`, {}, { headers });
        setButtonState("pending");
      } else if (buttonState === "pending") {
        await axios.delete(`${API_URL}/supprimerAmi/${userId}`, { headers });
        setButtonState("not_friends");
      } else if (buttonState === "requested") {
        await axios.put(`${API_URL}/accepterDemande/${userId}`, {}, { headers });
        setButtonState("friends");
      } else if (buttonState === "friends") {
        await axios.delete(`${API_URL}/supprimerAmi/${userId}`, { headers });
        setButtonState("not_friends");
      }

      refreshFriends();
    } catch (error) {
      console.error("❌ Erreur lors de l'action sur l'ami :", error);
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md text-white font-medium ${
        buttonState === "not_friends"
          ? "bg-blue-500 hover:bg-blue-600"
          : buttonState === "pending"
          ? "bg-gray-400 cursor-not-allowed"
          : buttonState === "requested"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-red-500 hover:bg-red-600"
      }`}
      onClick={handleAction}
      disabled={buttonState === "pending"}
    >
      {buttonState === "not_friends"
        ? "Ajouter"
        : buttonState === "pending"
        ? "En attente"
        : buttonState === "requested"
        ? "Accepter"
        : "Supprimer"}
    </button>
  );
};

export default FriendButton;
