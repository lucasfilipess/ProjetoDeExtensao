import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function SettingsNotifications({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(3);
  }, [setIsLinkActive]);
  return (
    <>
      <h1>Ainda será implementado</h1>
    </>
  );
}

export default SettingsNotifications;
