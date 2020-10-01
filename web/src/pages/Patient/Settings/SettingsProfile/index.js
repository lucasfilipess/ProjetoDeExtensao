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
import user from '../../../../assets/images/user.svg';
import api from '../../../../services/api';

function SettingsProfile({ setIsLinkActive }) {
  useEffect(() => {
    setIsLinkActive(1);
    async function getMyData() {
      try {
        await api
          .get('patient/my-data', {
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
    getMyData();
  }, [setIsLinkActive]);

  const [myData, setMyData] = useState({
    neighborhood: '',
    cellPhone: '',
    cep: '',
    city: '',
    complement: '',
    cpf: '',
    email: '',
    name: '',
    number: '',
    rg: '',
    street: '',
    telephone: '',
    uf: '',
    password: '',
  });
  const [isFocus, setIsFocus] = useState(null);

  function retriveData(data) {
    setMyData((e) => ({ ...e, name: data.name === null ? '' : data.name }));
    setMyData((e) => ({ ...e, cpf: data.cpf === null ? '' : data.cpf }));
    setMyData((e) => ({ ...e, rg: data.rg === null ? '' : data.rg }));
    setMyData((e) => ({
      ...e,
      telephone: data.telephone === null ? '' : data.telephone,
    }));
    setMyData((e) => ({
      ...e,
      cellPhone: data.cellPhone === null ? '' : data.cellPhone,
    }));
    setMyData((e) => ({ ...e, email: data.email === null ? '' : data.email }));
    setMyData((e) => ({ ...e, cep: data.cep === null ? '' : data.cep }));
    setMyData((e) => ({ ...e, uf: data.uf === null ? '' : data.uf }));
    setMyData((e) => ({
      ...e,
      city: data.city === null ? '' : data.city,
    }));
    setMyData((e) => ({
      ...e,
      neighborhood: data.neighborhood === null ? '' : data.neighborhood,
    }));
    setMyData((e) => ({
      ...e,
      street: data.street === null ? '' : data.street,
    }));
    setMyData((e) => ({
      ...e,
      number: data.number === null ? '' : data.number,
    }));
    setMyData((e) => ({
      ...e,
      complement: data.complement === null ? '' : data.complement,
    }));
    setMyData((e) => ({
      ...e,
      password: data.password === null ? '' : data.password,
    }));
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const data = {
      tipo: 3,
      neighborhood: myData.neighborhood,
      cellPhone: myData.cellPhone,
      cep: myData.cep,
      city: myData.city,
      complement: myData.complement,
      cpf: myData.cpf,
      email: myData.email,
      name: myData.name,
      number: myData.number,
      rg: myData.rg,
      street: myData.street,
      telephone: myData.telephone,
      uf: myData.uf,
      password: myData.password,
    };
    try {
      await api
        .put('patient', data, {
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
                  placeholder="name"
                  onChange={(e) =>
                    setMyData({ ...myData, name: e.target.value })
                  }
                  value={myData.name}
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
                  placeholder="Telephone"
                  onChange={(e) =>
                    setMyData({ ...myData, telephone: e.target.value })
                  }
                  value={myData.telephone}
                  onFocus={() => setIsFocus(5)}
                  className={isFocus === 5 ? StyledFocus : StyledInput}
                  type="numeric"
                />
                <input
                  placeholder="cellPhone"
                  onChange={(e) =>
                    setMyData({ ...myData, cellPhone: e.target.value })
                  }
                  value={myData.cellPhone}
                  onFocus={() => setIsFocus(6)}
                  className={isFocus === 6 ? StyledFocus : StyledInput}
                  type="text"
                />

                <input
                  placeholder="Senha"
                  onChange={(e) =>
                    setMyData({ ...myData, password: e.target.value })
                  }
                  value={myData.password}
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
                  placeholder="city"
                  onChange={(e) =>
                    setMyData({ ...myData, city: e.target.value })
                  }
                  value={myData.city}
                  onFocus={() => setIsFocus(10)}
                  className={isFocus === 10 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="neighborhood"
                  onChange={(e) =>
                    setMyData({ ...myData, neighborhood: e.target.value })
                  }
                  value={myData.neighborhood}
                  onFocus={() => setIsFocus(11)}
                  className={isFocus === 11 ? StyledFocus : StyledInput}
                  type="text"
                />
                <input
                  placeholder="street"
                  onChange={(e) =>
                    setMyData({ ...myData, street: e.target.value })
                  }
                  value={myData.street}
                  onFocus={() => setIsFocus(12)}
                  className={isFocus === 12 ? StyledFocus : StyledInput}
                  type="text"
                />

                <input
                  placeholder="Número"
                  onChange={(e) =>
                    setMyData({ ...myData, number: e.target.value })
                  }
                  value={myData.number}
                  onFocus={() => setIsFocus(13)}
                  className={isFocus === 13 ? StyledFocus : StyledInput}
                  type="number"
                />
                <input
                  placeholder="Complement"
                  onChange={(e) =>
                    setMyData({ ...myData, complement: e.target.value })
                  }
                  value={myData.complement}
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
