import React from 'react';
import HomeBanner from '../../Assets/images/home-banner.jpg';
import SecondBanner from '../../Assets/images/pattern_bg.jpg';
import {
  Navbar,
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
      <div className={Navbar}></div>
      <div className={Container}>
        <div
          className={Banner}
          style={{ backgroundImage: `url(${HomeBanner})` }}
        >
          <div className={Content}>
            <h1>Clínica UniBH</h1>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então
              bota uma pinga aí cumpadi! Praesent vel viverra nisi. Mauris
              aliquet nunc non turpis scelerisque, eget. Nullam volutpat risus
              nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
              Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
              Aenean sit amet nisi. In elementis mé pra quem é amistosis quis
              leo. Interagi no mé, cursus quis, vehicula ac nisi. Nec orci
              ornare consequat.
            </p>
            <div className={Buttons}>
              <Link to="/access">Cadastre-se</Link>
              <Link to="/access/login">Login</Link>
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
              <p>
                Aqui no site em qualquer data ou horario, ou pelo telefone (31)
                3030-3030 de segunda à sexta de 08:00 as 18:00.
              </p>
            </div>
            <div>
              <h2>Mussum Ipsum</h2>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite
                então bota uma pinga aí cumpadi! Praesent vel viverra nisi.
                Mauris aliquet nunc non turpis scelerisque, eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebPage;
