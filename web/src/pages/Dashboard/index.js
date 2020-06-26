import React, { useEffect } from "react";

import {
  Container,
  Boxes,
  BlueBox,
  Boxes2,
  Warnings,
  Arrow,
  Calendar,
  Boxes3,
  SocialMedia,
  Graphic,
} from "./styles.module.scss";
import calendar from "../../assets/images/calendar.png";
import calendarSvg from "../../assets/images/calendar.svg";
import pills from "../../assets/images/kendal-L4iKccAChOc-unsplash.jpg";
import calendarGoogle from "../../assets/images/googleAgenda.webp";
import facebookIcon from "../../assets/images/facebook.svg";
import gmailIcon from "../../assets/images/email.svg";
import whatsappIcon from "../../assets/images/whatsapp.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import graphic from "../../assets/images/grafico.PNG";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Dashboard({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
  }, [setIsActive]);
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
          <div className={Warnings} style={{ backgroundImage: `url(${pills})` }}>
            <p>Saiba como jogar fora medicamentos vencidos</p>
            <div className={Arrow}>
              <AiOutlineArrowLeft />
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className={Calendar}>
            <img src={calendar} alt="calendar" />
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
          <div className={Graphic}  style={{ backgroundImage: `url(${graphic})` }}></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
