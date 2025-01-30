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
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
      <div>
        <p className="text-lg font-semibold">{friend.prenom} {friend.nom}</p>
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
