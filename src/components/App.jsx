import Profile from "./Profile/Profile";
import user from './Profile/user.json';
import data from './Statistics/data.json';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App () {
  return <div>
<Profile 
userName={user.username}
tag={user.tag}
location = {user.location}
avatar = {user.avatar}
followers = {user.stats.followers}
views = {user.stats.views}
likes = {user.stats.likes}
/>
<Statistics
title = 'Upload stats'
stats = {data}
/>
<FriendList
friends = {friends}
/>
<TransactionHistory
  items={transactions}
  />
  </div>;

}

