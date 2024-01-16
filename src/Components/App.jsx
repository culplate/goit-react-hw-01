import { useState } from 'react';
import { Profile } from './Profile/Profile';
import './App.css';
import userData from '../userData.json';

function App() {
  return (
    <>
      <Profile profileData={userData} />
    </>
  );
}

export default App;
