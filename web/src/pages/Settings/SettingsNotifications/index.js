import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function SettingsNotifications({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(3);
  }, [setIsLinkActive]);
  return (
    <>
      <h1>SettingsNotifications</h1>
    </>
  );
}

export default SettingsNotifications;
