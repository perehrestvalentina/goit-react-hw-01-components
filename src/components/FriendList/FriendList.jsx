import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul class={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          
        />
      ))}
    </ul>
  );

  FriendList.PropTypes={
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
      })
      ).isRequired, 

  };

  export default FriendList;

