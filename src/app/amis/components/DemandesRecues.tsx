'use client';

import React from "react";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
}

interface DemandesRecuesProps {
  demandesRecues: Friend[];
}

const DemandesRecues: React.FC<DemandesRecuesProps> = ({ demandesRecues }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800">📩 Demandes d'amis reçues</h2>
      {demandesRecues.length === 0 ? (
        <p className="text-gray-500 mt-2">Aucune demande reçue.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {demandesRecues.map((friend) => (
            <li key={friend.id} className="p-3 bg-gray-100 rounded-lg flex justify-between">
              <div>
                <p className="font-medium">{friend.prenom} {friend.nom}</p>
                <p className="text-sm text-gray-500">{friend.email}</p>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Accepter</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DemandesRecues;
