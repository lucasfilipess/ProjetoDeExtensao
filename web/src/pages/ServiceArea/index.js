import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function ServiceArea({ setIsActive }) {
  useEffect(() => {
    setIsActive(2);
  }, [setIsActive]);
  return (
    <>
      <h1>ServiceArea</h1>
    </>
  );
}

export default ServiceArea;
