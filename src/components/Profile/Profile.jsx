import React from 'react';
import PropTypes from 'prop-types'
import s from './Profile.module.css'

const image = s.image;
const profile = s.profile;
const user = s.name;
const text = s.text;
const userStats = s.stats;
const statInfo = s.statInfo;
const quantity = s.quantity;


export default function Profile ({userName, tag, location, avatar, followers, views, likes }) {
    return (
        <div className={profile}>
  <div className="description">
    <img
      src={avatar}
      alt={userName}
      className={image}
    />
    <p className={user}>{userName}</p>
    <p className={text}>@{tag}</p>
    <p className={text}>{location}</p>
  </div>

  <ul className={userStats}>
    <li className={statInfo}>
      <span className="label">Followers</span>
      <span className={quantity}>{followers}</span>
    </li>
    <li className={statInfo}>
      <span className="label">Views</span>
      <span className={quantity}>{views}</span>
    </li>
    <li className={statInfo}>
      <span className="label">Likes</span>
      <span className={quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}