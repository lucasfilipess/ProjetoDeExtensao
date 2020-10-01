import React, { useEffect, useState } from 'react';
import {
  Container,
  Boxes,
  BlueBox,
  Boxes2,
  Warnings,
  Arrow,
  // Calendar,
  Boxes3,
  SocialMedia,
  Graphic,
} from './styles.module.scss';
// import calendar from '../../../assets/images/calendar.png';
import Calendar from 'react-calendar';
import calendarSvg from '../../../assets/images/calendar.svg';
import pills from '../../../assets/images/kendal-L4iKccAChOc-unsplash.jpg';
import calendarGoogle from '../../../assets/images/googleAgenda.webp';
import facebookIcon from '../../../assets/images/facebook.svg';
import gmailIcon from '../../../assets/images/email.svg';
import whatsappIcon from '../../../assets/images/whatsapp.svg';
import youtubeIcon from '../../../assets/images/youtube.svg';
import graphic from '../../../assets/images/grafico.PNG';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import api from '../../../services/api';

function Dashboard({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
    async function getAppointment() {
      try {
        await api
          .get('/appointment', {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          })
          .then((response) => setAppointment(response.data));
      } catch (error) {
        console.log(error.response);
      }
    }
    getAppointment();
  }, [setIsActive]);

  const [appointment, setAppointment] = useState([]);
  const [value, onChange] = useState(new Date());

  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  console.log(appointment);

  return (
    <>
      <div className={Container}>
        <div className={Boxes}>
          {appointment.map((item) => (
            <div key={item.id}>
              <h2>Proxima Consulta</h2>
              <img src={calendarSvg} alt="calendar" />
              <p>{item.service_area}</p>
              <div>
                <p>{item.name}</p>
                <p>{item.surname}</p>
              </div>
              <p>{item.date}</p>
              <p>{item.horary}</p>
            </div>
          ))}
        </div>
        <div>
          <div>
            <Carousel>
              <div>
                <img src={pills} />
              </div>
              <div>
                <img src={pills} />
              </div>
              <div>
                <img src={pills} />
              </div>
            </Carousel>
          </div>
          <div>
            <InfiniteCalendar
              width={400}
              height={280}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
            />
          </div>
        </div>

        <div className={Boxes3}>
          <div className={SocialMedia}>
            <img src={calendarGoogle} alt="calendar" />
            <button>Adicione suas consultas no Google Agenda</button>
            {/* <div>
              <img src={facebookIcon} alt="social media" />
              <img src={gmailIcon} alt="social media" />
              <img src={whatsappIcon} alt="social media" />
              <img src={youtubeIcon} alt="social media" />
            </div> */}
          </div>
          {/* <div
            className={Graphic}
            style={{ backgroundImage: `url(${graphic})` }}
          ></div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
