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
// import calendar from '../../../Assets/images/calendar.png';
import Calendar from 'react-calendar';
import calendarSvg from '../../../Assets/images/calendar.svg';
import pills from '../../../Assets/images/kendal-L4iKccAChOc-unsplash.jpg';
import calendarGoogle from '../../../Assets/images/googleAgenda.webp';
import facebookIcon from '../../../Assets/images/facebook.svg';
import gmailIcon from '../../../Assets/images/email.svg';
import whatsappIcon from '../../../Assets/images/whatsapp.svg';
import youtubeIcon from '../../../Assets/images/youtube.svg';
import graphic from '../../../Assets/images/grafico.PNG';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

function Dashboard({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
  }, [setIsActive]);

  const [value, onChange] = useState(new Date());

  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  return (
    <>
      <div className={Container}>
        <div className={Boxes}>
          <div>
            <h2>Proxima Consulta</h2>
            <img src={calendarSvg} alt="calendar" />
            <p>8 de Julho (Quinta-feira)</p>
            <p>Horario: 09:00</p>
          </div>
          <div>
            <h2>Consultas Agendadas</h2>
            <p>8 de Julho (Quinta-feira)</p>
            <p>17 de Julho (Segunda-feira)</p>
          </div>
          <div>
            <h2>Consultas Passadas</h2>
            <p>12 de Agosto (Terça-feira)</p>
            <p>13 de Julho (Terça-feira)</p>
          </div>
          <div className={BlueBox}>
            <h2>Especialidades</h2>
            <p>Clinico Geral</p>
            <p>Fisioterapeuta</p>
            <p>Pesquisar</p>
          </div>
        </div>

        <div className={Boxes2}>
          <div
          // className={Warnings}
          // style={{ backgroundImage: `url(${pills})` }}
          >
            {/* <p>Saiba como jogar fora medicamentos vencidos</p>
            <div className={Arrow}>
              <AiOutlineArrowLeft />
              <AiOutlineArrowRight />
            </div> */}
            <Carousel>
              <div>
                <img src={pills} />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <img src={pills} />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <img src={pills} />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          <div>
            {/* <img src={calendar} alt="calendar" /> */}
            <Calendar
              onChange={onChange}
              value={value}
              showWeekNumbers={true}
            />

            {/* <InfiniteCalendar
              width={400}
              height={600}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
            /> */}
          </div>
        </div>

        <div className={Boxes3}>
          <div className={SocialMedia}>
            <img src={calendarGoogle} alt="calendar" />
            <button>Adicione suas consultas no Google Agenda</button>
            <div>
              <img src={facebookIcon} alt="social media" />
              <img src={gmailIcon} alt="social media" />
              <img src={whatsappIcon} alt="social media" />
              <img src={youtubeIcon} alt="social media" />
            </div>
          </div>
          <div
            className={Graphic}
            style={{ backgroundImage: `url(${graphic})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
