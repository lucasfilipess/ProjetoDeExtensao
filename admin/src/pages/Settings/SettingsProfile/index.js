import React, { useEffect, useState } from 'react';
import {
  Container,
  ProfilePicture,
  Name,
  PictureContainer,
  UserContent,
  PictureButtons,
  FormContainer,
  FormNav,
  StyledInput,
  StyledFocus,
} from './styles.module.scss';
import user from '../../../assets/images/user.svg';
import api from '../../../services/api';

function SettingsProfile({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    getMyData();
  }, [setIsLinkActive]);

  const [myData, setMyData] = useState({
    bairro: '',
    celular: '',
    cep: '',
    cidade: '',
    complemento: '',
    cpf: '',
    email: '',
    nome: '',
    numero: '',
    rg: '',
    rua: '',
    telefone: '',
    uf: '',
    senha: '',
  });
  const [isFocus, setIsFocus] = useState(null);

  function getMyType() {
    if (localStorage.getItem('type') === '1') {
      return 'teacher';
    } else if (localStorage.getItem('type') === '2') {
      return 'student';
    } else {
      return 'patient';
    }
  }

  async function getMyData() {
    try {
      await api
        .get(`${getMyType()}/my-data`, {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
        .then((response) => {
          retriveData(response.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
  }
  function retriveData(data) {
    setMyData((e) => ({ ...e, nome: data.nome === null ? '' : data.nome }));
    setMyData((e) => ({ ...e, cpf: data.cpf === null ? '' : data.cpf }));
    setMyData((e) => ({ ...e, rg: data.rg === null ? '' : data.rg }));
    setMyData((e) => ({
      ...e,
      telefone: data.telefone === null ? '' : data.telefone,
    }));
    setMyData((e) => ({
      ...e,
      celular: data.celular === null ? '' : data.celular,
    }));
    setMyData((e) => ({ ...e, email: data.email === null ? '' : data.email }));
    setMyData((e) => ({ ...e, cep: data.cep === null ? '' : data.cep }));
    setMyData((e) => ({ ...e, uf: data.uf === null ? '' : data.uf }));
    setMyData((e) => ({
      ...e,
      cidade: data.cidade === null ? '' : data.cidade,
    }));
    setMyData((e) => ({
      ...e,
      bairro: data.bairro === null ? '' : data.bairro,
    }));
    setMyData((e) => ({ ...e, rua: data.rua === null ? '' : data.rua }));
    setMyData((e) => ({
      ...e,
      numero: data.numero === null ? '' : data.numero,
    }));
    setMyData((e) => ({
      ...e,
      complemento: data.complemento === null ? '' : data.complemento,
    }));
    setMyData((e) => ({ ...e, senha: data.senha === null ? '' : data.senha }));
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const data = {
      tipo: 3,
      bairro: myData.bairro,
      celular: myData.celular,
      cep: myData.cep,
      cidade: myData.cidade,
      complemento: myData.complemento,
      cpf: myData.cpf,
      email: myData.email,
      nome: myData.nome,
      numero: myData.numero,
      rg: myData.rg,
      rua: myData.rua,
      telefone: myData.telefone,
      uf: myData.uf,
      senha: myData.senha,
    };
    try {
      await api
        .put(`${getMyType()}`, data, {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className={Container}>
        <div className={ProfilePicture}>
          <div className={UserContent}>
            <div className={Name}>
              <h3>{localStorage.getItem('name')}</h3>
              <p>Rm. Valcea, Romania</p>
              <p>4:32PM (GMT-4)</p>
            </div>
            <div className={PictureContainer}>
              <img src={user} alt="user" />
            </div>
          </div>
          <div className={PictureButtons}>
            <button>Adicionar uma foto</button>
            <button>Remover Foto</button>
          </div>
        </div>
        <div className={FormContainer}>
          <div className={FormNav}>
            <div>
              <p>Meus dados</p>
              <p>As informações do seu perfil podem ser editadas aqui.</p>
            </div>
          </div>
          <form onSubmit={handleUpdate}>
            <div>
              <div>
                <input
                  placeholder="Nome"
                  onChange={(e) =>
                    setMyData({ ...myData, nome: e.target.value })
                  }
                  value={myData.nome}
                  onFocus={() => setIsFocus(1)}
                  className={isFocus === 1 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="CPF"
                  onChange={(e) =>
                    setMyData({ ...myData, cpf: e.target.value })
                  }
                  value={myData.cpf}
                  onFocus={() => setIsFocus(2)}
                  className={isFocus === 2 ? StyledFocus : StyledInput}
                  type="number"
                />
                <input
                  placeholder="RG"
                  onChange={(e) => setMyData({ ...myData, rg: e.target.value })}
                  value={myData.rg}
                  onFocus={() => setIsFocus(3)}
                  className={isFocus === 3 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="Email"
                  onChange={(e) =>
                    setMyData({ ...myData, email: e.target.value })
                  }
                  value={myData.email}
                  onFocus={() => setIsFocus(4)}
                  className={isFocus === 4 ? StyledFocus : StyledInput}
                  type="email"
                />
                <input
                  placeholder="Telefone"
                  onChange={(e) =>
                    setMyData({ ...myData, telefone: e.target.value })
                  }
                  value={myData.telefone}
                  onFocus={() => setIsFocus(5)}
                  className={isFocus === 5 ? StyledFocus : StyledInput}
                  type="numeric"
                />
                <input
                  placeholder="Celular"
                  onChange={(e) =>
                    setMyData({ ...myData, celular: e.target.value })
                  }
                  value={myData.celular}
                  onFocus={() => setIsFocus(6)}
                  className={isFocus === 6 ? StyledFocus : StyledInput}
                  type="text"
                />

                <input
                  placeholder="Senha"
                  onChange={(e) =>
                    setMyData({ ...myData, senha: e.target.value })
                  }
                  value={myData.senha}
                  onFocus={() => setIsFocus(7)}
                  className={isFocus === 7 ? StyledFocus : StyledInput}
                  type="password"
                />
              </div>

              <div>
                <input
                  placeholder="CEP"
                  onChange={(e) =>
                    setMyData({ ...myData, cep: e.target.value })
                  }
                  value={myData.cep}
                  onFocus={() => setIsFocus(8)}
                  className={isFocus === 8 ? StyledFocus : StyledInput}
                  type="number"
                />

                <input
                  placeholder="UF"
                  onChange={(e) => setMyData({ ...myData, uf: e.target.value })}
                  value={myData.uf}
                  onFocus={() => setIsFocus(9)}
                  className={isFocus === 9 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="Cidade"
                  onChange={(e) =>
                    setMyData({ ...myData, cidade: e.target.value })
                  }
                  value={myData.cidade}
                  onFocus={() => setIsFocus(10)}
                  className={isFocus === 10 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="Bairro"
                  onChange={(e) =>
                    setMyData({ ...myData, bairro: e.target.value })
                  }
                  value={myData.bairro}
                  onFocus={() => setIsFocus(11)}
                  className={isFocus === 11 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="Rua"
                  onChange={(e) =>
                    setMyData({ ...myData, rua: e.target.value })
                  }
                  value={myData.rua}
                  onFocus={() => setIsFocus(12)}
                  className={isFocus === 12 ? StyledFocus : StyledInput}
                  type="text"
                />

                <input
                  placeholder="Número"
                  onChange={(e) =>
                    setMyData({ ...myData, numero: e.target.value })
                  }
                  value={myData.numero}
                  onFocus={() => setIsFocus(13)}
                  className={isFocus === 13 ? StyledFocus : StyledInput}
                  type="number"
                />
                <input
                  placeholder="Complemento"
                  onChange={(e) =>
                    setMyData({ ...myData, complemento: e.target.value })
                  }
                  value={myData.complemento}
                  onFocus={() => setIsFocus(14)}
                  className={isFocus === 14 ? StyledFocus : StyledInput}
                  type="text"
                />
              </div>
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SettingsProfile;
