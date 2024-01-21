import css from './Profile.module.css';

export const Profile = ({ profileData }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.avatarWrap}>
          <img
            src={profileData.avatar}
            alt={`${profileData.username} avatar`}
            className={css.avatar}
          />
        </div>
        <p className={css.name}>{profileData.username}</p>
        <p className={css.tag}>@{profileData.tag}</p>
        <p className={css.location}>{profileData.location}</p>
      </div>

      <ul className={css.statsList}>
        <li>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{profileData.stats.followers}</span>
        </li>
        <li>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{profileData.stats.views}</span>
        </li>
        <li>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{profileData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
