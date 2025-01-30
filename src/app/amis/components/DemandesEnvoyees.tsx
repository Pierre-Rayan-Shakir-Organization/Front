'use client';

import React from "react";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
}

interface DemandesEnvoyeesProps {
  demandesEnvoyees: Friend[];
}

const DemandesEnvoyees: React.FC<DemandesEnvoyeesProps> = ({ demandesEnvoyees }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800">📤 Demandes envoyées</h2>
      {demandesEnvoyees.length === 0 ? (
        <p className="text-gray-500 mt-2">Aucune demande envoyée.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {demandesEnvoyees.map((friend) => (
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

export default DemandesEnvoyees;
