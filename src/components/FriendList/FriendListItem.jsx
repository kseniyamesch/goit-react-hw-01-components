import React from "react";
import PropTypes from 'prop-types';
import s from './FriendList.module.css'


export default function FriendListItem ({avatar, name, isOnline}) {
return (
<li className={s.item}>
  {isOnline ? (<span className={s.online}></span>) : (<span className={s.offline}>
    </span>)}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
)
}


FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
}