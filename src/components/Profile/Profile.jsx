import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({avatar, username, tag, location, stats}) => {
   return (
    <div class={css.profile}>
    <div class={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        class={css.avatar}
      />
      <p class={css.name}>{username}</p>
      <p class={css.tag}>@{tag}</p>
      <p class={css.location}>{location}</p>
    </div>
  
    <ul class={css.stats}>
      <li>
        <span class={css.label}>Followers</span>
        <span class={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span class={css.label}>Views</span>
        <span class={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span class={css.label}>Likes</span>
        <span class={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
    );

};

Profile.PropTypes={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
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



