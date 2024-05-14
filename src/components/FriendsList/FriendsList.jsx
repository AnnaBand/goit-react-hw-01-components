import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends, index }) => {
  return (
    <ul className={css.friends}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id || index}>
          <span
            className={
              friend.isOnline ? css['statusOnline'] : css['statusOffline']
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  isOline: PropTypes.bool,
};