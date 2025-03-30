'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ConnectGoogleButton() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleClick = () => {
    if (!token) {
      toast.error("Utilisateur non connecté");
      return;
    }

    // Redirection vers le backend avec le JWT dans l’URL
    window.location.href = `http://localhost:3000/connect-google?token=${token}`;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow text-sm"
    >
      🔗 Connecter Google Calendar
    </button>
  );
}
