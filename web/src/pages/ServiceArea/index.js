import React, { useEffect } from 'react';
import {ImageContainer} from './styles.module.scss';
import {SearchBox} from './styles.module.scss';
import {BoxContainer} from './styles.module.scss';
function ServiceArea({ setIsActive }) {
  useEffect(() => {
    setIsActive(2);
  }, [setIsActive]);
  return (
    <>
      <h1>Atendimento</h1>   
      <div  className={ImageContainer}>    
            <img src="" alt="" />
      </div>
    
      <input className={SearchBox} type="text" placeholder="Search.."/>
      
      <div className={BoxContainer}>
        <div> Caixa1 </div>
        <div> Caixa2 </div>
        <div> Caixa3 </div>
        <div> Caixa4 </div>
        <div> Caixa5 </div>
        <div> Caixa6 </div>
      </div>
      
      



  
    </>

    
  );
}

export default ServiceArea;
