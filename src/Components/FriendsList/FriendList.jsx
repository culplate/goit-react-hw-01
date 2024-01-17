import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {friendsData.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friendData={friend} />
          </li>
        );
      })}
    </ul>
  );
};
