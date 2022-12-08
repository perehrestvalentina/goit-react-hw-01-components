import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
     <ul className={css.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}          
      />
    ))}
  </ul>
  );
   
    }; 
  FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,

    })).isRequired,
  }

  export default FriendList;

