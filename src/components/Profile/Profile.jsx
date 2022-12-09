import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({avatar, username, tag, location, stats}) => {
   return (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.stats__item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
    );

};

Profile.propTypes={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Profile;

// --------------------------------

// export default function Profile ({avatar, userName, tag, location, stats) {
//     return (
// //     <div class="profile">
//     <div class="description">
//     <img
//       src={avatar}
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{username}</p>
//     <p class="tag">@{tag}</p>
//     <p class="location">{location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{stats.likes}</span>
//     </li>
//   </ul>
// </div>
//     );
 
//  };



