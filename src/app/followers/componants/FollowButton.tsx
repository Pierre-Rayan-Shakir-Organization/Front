'use client';

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

interface FollowButtonProps {
  userId: number;
  status: "not_following" | "pending" | "following_back" | "following" | "followed_by" | "friends";
  refreshFriends: () => void;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, status, refreshFriends }) => {
    const [buttonState, setButtonState] = useState(status);
  
    useEffect(() => {
      setButtonState(status);
    }, [status]);
  
    const handleFollowClick = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token JWT manquant");
  
        const headers = { Authorization: `Bearer ${token}` };
  
        if (buttonState === "not_following") {
          await axios.post(`${API_URL}/follow/${userId}`, {}, { headers });
          setButtonState("pending"); 
        } else if (buttonState === "following") {
          await axios.delete(`${API_URL}/unfollow/${userId}`, { headers });
          setButtonState("not_following");
        } else if (buttonState === "followed_by") {
          await axios.put(`${API_URL}/acceptFollow/${userId}`, {}, { headers });
          setButtonState("friends");
        }
  
        refreshFriends();
      } catch (error) {
        console.error("❌ Erreur lors de l'action follow/unfollow :", error);
      }
    };
  
    return (
      <div className="flex items-center space-x-2">
        {buttonState === "friends" ? (
          <span className="text-green-500 font-semibold">Amis</span>
        ) : (
          <button
            className={`px-4 py-2 rounded-md text-white font-medium ${
              buttonState === "not_following" || buttonState === "followed_by"
                ? "bg-blue-500 hover:bg-blue-600"
                : buttonState === "pending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={handleFollowClick}
            disabled={buttonState === "pending"}
          >
            {buttonState === "not_following"
              ? "Suivre"
              : buttonState === "pending"
              ? "En attente"
              : buttonState === "followed_by"
              ? "Suivre en retour"
              : "Se désabonner"}
          </button>
        )}
      </div>
    );
  };
  
  
  

export default FollowButton;
