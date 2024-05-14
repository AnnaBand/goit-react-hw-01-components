import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import userData from './json/user.json';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userData);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {user && <Profile user={user} />}
    </div>
  );
};

