'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface UserContextType {
  userId: number | null;
}

export const UserContext = createContext<UserContextType>({ userId: null });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserId(res.data.userId);
      } catch (error) {
        console.error('Erreur lors de la récupération du userId :', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
