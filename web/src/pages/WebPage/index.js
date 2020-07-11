import React from 'react';
import HomeBanner from '../../Assets/images/home-banner.jpg';
import SecondBanner from '../../Assets/images/pattern_bg.jpg';
import {
  Container,
  Banner,
  Content,
  Buttons,
  BannerSec,
  Boxes,
} from './styles.module.scss';
import { Link } from 'react-router-dom';
function WebPage() {
  return (
    <>
      <div className={Container}>
        <div
          className={Banner}
          style={{ backgroundImage: `url(${HomeBanner})` }}
        >
          <div className={Content}>
            <h1>Clínica UniBH</h1>
            <p>
              Considerado o Melhor Centro Universitário privado de Belo
              Horizonte, após a divulgação do IGC (Índice Geral de Cursos), em
              dezembro de 2019 pelo Ministério da Educação (MEC – ENADE 2018), o
              UniBH é uma das mais tradicionais instituições de ensino de Belo
              Horizonte, com mais de 50 anos de atuação na cidade. É uma escola
              aberta e próxima da comunidade. Referência quando o assunto é
              qualidade acadêmica e extensão universitária, a instituição
              oferece projetos inovadores que integram ensino, pesquisa e
              extensão, aliados a uma estrutura física completa e moderna.
              Consciente de seu papel social, o UniBH estabelece parcerias com a
              comunidade e desenvolve ações que beneficiam especialmente a
              população carente, com mais de mil atendimentos mensais prestados
              gratuitamente, além de importantes projetos ligados à
              sustentabilidade.
            </p>
            <div className={Buttons}>
              <Link to="access">Cadastre-se</Link>
              <Link to="access/login">Login</Link>
            </div>
          </div>
        </div>
        <div
          className={BannerSec}
          style={{ backgroundImage: `url(${SecondBanner})` }}
        >
          <div className={Boxes}>
            <div>
              <h2>Endereço</h2>
              {/* <img src={calendarSvg} alt="calendar" /> */}
              <p>
                A clínica fica localizada na Av. Professor Mário Werneck, 1685 -
                Buritis, Belo Horizonte - MG, 30575-180
              </p>
            </div>
            <div>
              <h2>Agende sua consulta</h2>
              <p>Aqui no site em qualquer data ou horario, ou pelo telefone.</p>
            </div>
            <div>
              <h2>Contato</h2>
              <p>(31)3319-9509 e (31)3319-9345</p>
              <p>Horário de atendimento das consultas: 7h40 às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebPage;
