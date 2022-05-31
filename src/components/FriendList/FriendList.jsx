import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import s from './FriendList.module.css'

const userFriends = s.friends;

export default function FriendList (friends) {
    return (
        <ul className={userFriends}>
            {friends.friends.map(({avatar, name, id, isOnline}) =>
            <FriendListItem 
            key = {id}
            avatar = {avatar}
            isOnline = {isOnline}
            name = {name}
            />
            )}
        </ul>
    )

}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
}))
}
