import FollowButton from "./FollowButton.tsx";

interface Friend {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  status: "not_following" | "pending" | "following_back" | "following" | "followed_by";
}

interface FriendItemProps {
  friend: Friend;
  refreshFriends: () => void;
}

const FriendItem: React.FC<FriendItemProps> = ({ friend, refreshFriends }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded">
      <div>
        <p className="text-4xl font-bold bg-gradient-to-r from-purple-100 via-pink-100 to-pink-200 bg-clip-text text-transparent">{friend.prenom} {friend.nom}</p>
        <p className="text-sm text-gray-500">{friend.email}</p>
      </div>
      <FollowButton
        userId={friend.id}
        status={friend.status}
        refreshFriends={refreshFriends}
      />
    </div>
  );
};

export default FriendItem;
