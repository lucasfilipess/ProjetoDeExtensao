import React, { useState } from 'react';

// import { Container } from './styles';

function Teste({ data }) {
  const [dados, setDados] = useState(data);
  console.log(dados);

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => setDados({ ...dados, name: e.target.value })}
          value={dados.name}
        />
      </div>
    </>
  );
}

export default Teste;
