import './App.css';
import { useState } from 'react';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../userData.json';
import friendsData from '../friends.json';
import transactions from '../transactions.json';

function App() {
  return (
    <>
      <aside>
        <Profile profileData={userData} />
        <FriendList friendsData={friendsData} />
      </aside>
      <main>
        <TransactionHistory items={transactions} />
      </main>
    </>
  );
}

export default App;
