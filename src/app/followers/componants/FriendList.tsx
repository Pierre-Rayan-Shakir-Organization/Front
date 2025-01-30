'use client';

import FriendItem from "./FriendItem.tsx";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  status: "not_following" | "pending" | "following_back" | "following" | "friends";
}

interface FriendsListProps {
  title: string;
  friends: Friend[];
  refreshFriends: () => void;
}

const FriendsList: React.FC<FriendsListProps> = ({ title, friends, refreshFriends }) => {
  console.log(`✅ Affichage de la liste "${title}"`, friends); // Vérifier si des données arrivent

  return (
    
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 via-pink-500 to-pink-500 bg-clip-text text-transparent">{title}</h2>
      <div className="space-y-4 mt-4">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <FriendItem key={friend.id} friend={friend} refreshFriends={refreshFriends} />
          ))
        ) : (
          <p className="text-gray-500">Aucun résultat.</p>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
