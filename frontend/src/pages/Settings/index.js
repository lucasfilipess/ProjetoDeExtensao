import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function Settings({ setIsActive }) {
  useEffect(() => {
    setIsActive(6);
  }, []);
  return (
    <>
      <h1>Settings</h1>
    </>
  );
}

export default Settings;
