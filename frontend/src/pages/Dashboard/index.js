import React, { useEffect } from 'react';
import {} from './styles.module.scss';

function Dashboard({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;
