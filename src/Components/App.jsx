import './App.css';
import { useState } from 'react';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendsList/FriendList';
import userData from '../userData.json';
import friendsData from '../friends.json';

function App() {
  return (
    <>
      <Profile profileData={userData} />
      <FriendList friendsData={friendsData} />
    </>
  );
}

export default App;
