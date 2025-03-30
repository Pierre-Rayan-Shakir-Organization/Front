'use client';

import React from "react";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
}

interface AmisListProps {
  amis: Friend[];
}

const AmisList: React.FC<AmisListProps> = ({ amis }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800">👫 Liste d'amis</h2>
      {amis.length === 0 ? (
        <p className="text-gray-500 mt-2">Vous n'avez pas encore d'amis.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {amis.map((friend) => (
            <li key={friend.id} className="p-3 bg-gray-100 rounded-lg">
              <p className="font-medium">{friend.prenom} {friend.nom}</p>
              <p className="text-sm text-gray-500">{friend.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AmisList;
