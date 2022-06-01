import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function Profile({ userName, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt={userName} className={s.image} />
        <p className={s.name}>{userName}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statInfo}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statInfo}>
          <span className="label">Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statInfo}>
          <span className="label">Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
