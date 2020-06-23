import React, { useEffect } from 'react';
import {Container, Boxes, Boxes2, Graphic, Calendar, Boxes3, Products, Orders} from './styles.module.scss';
import calendar from '../../assets/images/calendar.png';
function Dashboard({ setIsActive }) {
  useEffect(() => {
    setIsActive(1);
  }, [setIsActive]);
  return (
    <>
    <div className={Container}>
      <div className={Boxes}>
        <div>Proxima Consulta</div>
        <div>Consultas Agendadas</div>
        <div>Consultas Passadas</div>
        <div>Caixinha 4</div>
      </div>
      <div className={Boxes2}>
        <div className={Graphic}></div>
        <div className={Calendar}>
          <img src={calendar} alt="calendar"/>
        </div>
      </div>
      <div className={Boxes3}>
        <div className={Products}></div>
        <div className={Orders}></div>
      </div>
    </div> 
    </>
  );
}

export default Dashboard;
