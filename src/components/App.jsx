import Profile from './Profile/Profile';
import user from '../dataList/user.json';

import Statistics from './Statistics/Statistics';
import data from '../dataList/data.json'

import FriendList from './FriendList/FriendList';
import friends from '../dataList/friends.json'

import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../dataList/transactions.json'

export const App = ( ) => {
  return ( 
    <div>
     <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>      
      <TransactionHistory items={transactions} /> 
    </div>
  
  );
};



