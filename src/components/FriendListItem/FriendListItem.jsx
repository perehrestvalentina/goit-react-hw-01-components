import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline})=>{
    
    <li class={css.item}>
     <span className={isOnline ? css.online : css.offline}></span>
    <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p class={css.name}>{name}</p>
  </li>
};

FriendListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,

};

export default FriendListItem;