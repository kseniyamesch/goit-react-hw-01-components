import React from "react";
import PropTypes from 'prop-types';

export default function FriendListItem ({avatar, name, isOnline}) {
<li className="item">
    { {isOnline} 
    ? (<span className="online"></span>)
    : (<span className="offline"></span>)
    }
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
}

