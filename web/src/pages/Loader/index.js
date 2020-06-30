import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// import { Container } from './styles';

function Loader() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
}

export default Loader;
