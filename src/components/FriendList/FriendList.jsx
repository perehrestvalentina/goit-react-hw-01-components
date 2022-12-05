import FriendListItem from "components/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
export default FriendList;