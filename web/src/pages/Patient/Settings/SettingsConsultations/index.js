import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function SettingsConsultations({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(2);
  }, [setIsLinkActive]);
  return (
    <>
      <h1>Ainda será implementado</h1>
    </>
  );
}

export default SettingsConsultations;
