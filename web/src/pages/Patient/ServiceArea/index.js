import React, { useEffect, useState } from 'react';
import {
  BoxContainer,
  Container,
  SearchBox,
  ImageContainer,
  Name,
  Description,
} from './styles.module.scss';
import medicine_icon from '../../../Assets/images/medicine_icon.svg';
import api from '../../../Services/api';
import nutrition from '../../../Assets/images/nutrition.svg';
import teeth from '../../../Assets/images/teeth.svg';
import brain from '../../../Assets/images/brain.svg';
import fisio from '../../../Assets/images/fisio.svg';
import nurse from '../../../Assets/images/nurse.svg';
import banner from '../../../Assets/images/carousel.jpg';
import { store } from 'react-notifications-component';

// import Search from '../../Utils/Search';

function ServiceArea({ setIsActive }) {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    setIsActive(2);
    async function getAvailability() {
      try {
        await api
          .get('/availability')
          .then((response) => setAvailability(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getAvailability();
  }, [setIsActive]);

  async function handleAppointment(option, item) {
    const data = {
      id: item.id,
      id_service_area: item.id_service_area,
      id_supervisor: item.id_supervisor,
      date: item.date,
      horary: item.hourly,
    };
    console.log(data);
    if (option) {
      try {
        await api
          .post('/appointment', data, {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then(() =>
            store.addNotification({
              title: 'Sucesso',
              message: `Consulta marcada! Te esperamos no dia ${data.date} às ${data.horary}`,
              type: 'success',
              insert: 'top',
              container: 'top-right',
              animationIn: ['animated', 'fadeIn'],
              animationOut: ['animated', 'fadeOut'],
              dismiss: {
                duration: 5000,
                onScreen: true,
              },
            })
          );
      } catch (error) {
        store.addNotification({
          title: 'Ooops',
          message:
            'Houve um erro ao processar a sua requisição, confira as suas credencias e tente novamente',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 8000,
            onScreen: true,
          },
        });
      }
    }
  }

  return (
    <>
      <div className={Container}>
        <div
          className={ImageContainer}
          // style={{ backgroundImage: `url(${banner})` }}
        >
          {/* <img src={banner} alt="" /> */}
        </div>
        {/* <input className={SearchBox} type="text" placeholder="Search.." /> */}
        <div className={BoxContainer}>
          {availability.map((item) => (
            <div key={item.id}>
              {item.name === 'Nutrição' ? (
                <img src={nutrition} alt="" />
              ) : item.name === 'Medicina' ? (
                <img src={medicine_icon} alt="" />
              ) : item.name === 'Fisioterapia' ? (
                <img src={fisio} alt="" />
              ) : (
                <img src={teeth} alt="" />
              )}
              <h2>{item.name}</h2>
              <p className={Description}>{item.description}</p>
              <div>
                <p>{item.supervisor_name}</p>
                <p>{item.supervisor_surname}</p>
              </div>
              <div>
                <p>Horário: {item.hourly}</p>
                <p>Data: {item.date}</p>
              </div>
              <button
                onClick={() =>
                  handleAppointment(
                    window.confirm(`Deseja marcar a consulta?`),
                    item
                  )
                }
              >
                Agendar consulta
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceArea;
