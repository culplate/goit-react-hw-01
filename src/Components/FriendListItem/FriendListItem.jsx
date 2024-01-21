import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friendData }) => {
  return (
    <a href="https://en.wiktionary.org/wiki/friend#Noun" target="_blank">
      <div className={css.item}>
        <img
          className={css.avatar}
          src={friendData.avatar}
          alt="Avatar"
          width="48"
        />
        <div className={css.friendInfo}>
          <p className={css.name}>{friendData.name}</p>
          <p
            className={clsx(css.status, {
              [css.isOnline]: friendData.isOnline,
              [css.isOffline]: !friendData.isOnline,
            })}
          >
            {friendData.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </a>
  );
};
