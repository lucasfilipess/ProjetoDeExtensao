import React, { useEffect } from 'react';
<<<<<<< HEAD
import {
  BoxContainer,
  Container,
  SearchBox,
  ImageContainer,
  Name,
  Description,
} from './styles.module.scss';
import medicine_icon from '../../assets/images/medicine_icon.svg';
import nutrition from '../../assets/images/nutrition.svg';
import teeth from '../../assets/images/teeth.svg';
import brain from '../../assets/images/brain.svg';
import fisio from '../../assets/images/fisio.svg';
import nurse from '../../assets/images/nurse.svg';
=======
import { BoxContainer, Container, SearchBox, ImageContainer, Name, Description } from './styles.module.scss';
import medicine_icon from '../../assets/images/medicine_icon.svg'
import nutrition from '../../assets/images/nutrition.svg'
import teeth from '../../assets/images/teeth.svg'
import brain from '../../assets/images/brain.svg'
import fisio from '../../assets/images/fisio.svg'
import nurse from '../../assets/images/nurse.svg'
>>>>>>> origin/development_service_area
function ServiceArea({ setIsActive }) {
  useEffect(() => {
    setIsActive(2);
  }, [setIsActive]);

<<<<<<< HEAD
  return (
    <>
      <div className={Container}>
        <div className={ImageContainer}>
          <img src="" alt="" />
        </div>
        <input className={SearchBox} type="text" placeholder="Search.." />
        <div className={BoxContainer}>
          <div>
            <img src={medicine_icon} alt="" />
            <p className={Name}>Medicina </p>
            <p className={Description}>
              É a ciência que investiga a natureza e as causas das doenças
              humanas, procurando sua cura e prevenção. Ele pesquisa e trata
              disfunções e moléstias, escolhendo os melhores procedimentos para
              preveni-las e combatê-las.
            </p>
          </div>

          <div>
            <img src={nutrition} alt="" />
            <p className={Name}>Nutrição</p>

            <p className={Description}>
              É a ciência que investiga e controla a relação homem-alimento para
              preservar a saúde humana.
            </p>
          </div>

          <div>
            <img src={teeth} alt="" />
            <p className={Name}>Odontologia </p>
            <p className={Description}>
              É a ciência voltada para o estudo e o tratamento dos dentes, da
              boca e dos ossos da face. O dentista cuida da saúde e da estética
              da boca. Restaura, extrai e limpa dentes, projeta e instala
              próteses e realiza cirurgias.
            </p>{' '}
          </div>
          <div>
            <img src={brain} alt="" />
            <p className={Name}>Psicologia </p>
            <p className={Description}>
              O Psicólogo estuda os fenômenos psíquicos e de comportamento do
              ser humano a partir da análise de suas emoções, ideais e seus
              valores. Atua no diagnóstico, prevenção e tratamento de doenças
              mentais, de personalidade ou distúrbios.
            </p>
          </div>
          <div>
            <img src={fisio} alt="" />
            <p className={Name}>Fisioterapia </p>
            <p className={Description}>
              É o conjunto de técnicas usadas no tratamento e na prevenção de
              doenças e lesões. O fisioterapeuta previne, diagnostica e trata
              disfunções do organismo humano causadas por acidentes, má-formação
              genética ou vício de postura.
            </p>{' '}
          </div>
          <div>
            <img src={nurse} alt="" />
            <p className={Name}>Enfermagem </p>
            <p className={Description}>
              O enfermeiro atua na proteção, na promoção e na recuperação da
              saúde e na prevenção de doenças e complicações de saúde.
            </p>{' '}
          </div>
        </div>
      </div>
    </>
=======

  return (
    <>

      <div className={Container}>

        <div className={ImageContainer}>
          <img src="" alt="" />
        </div>


        <input className={SearchBox} type="text" placeholder="Search.." />

        <div className={BoxContainer}>
          <div>

            <img src={medicine_icon} alt="" />
            <p className={Name}>
              Medicina </p>
            <p className={Description}>

              É a ciência que investiga a natureza e as causas das doenças humanas,
              procurando sua cura e prevenção. Ele pesquisa e trata disfunções e moléstias,
              escolhendo os melhores procedimentos para preveni-las e combatê-las.</p></div>

          <div>

            <img src={nutrition} alt="" />
            <p className={Name}>
              Nutrição
                                       </p>

            <p className={Description}>

              É a ciência que investiga e controla a relação homem-alimento para preservar a saúde humana.
                         </p>
          </div>


          <div>
            <img src={teeth} alt="" />
            <p className={Name}>
              Odontologia </p>
            <p className={Description}>

              É a ciência voltada para o estudo e o tratamento dos dentes,
              da boca e dos ossos da face. O dentista cuida da saúde e da estética da boca.
              Restaura, extrai e limpa dentes,
                      projeta e instala próteses e realiza cirurgias.</p> </div>
          <div>
            <img src={brain} alt="" />
            <p className={Name}>
              Psicologia </p>
            <p className={Description}>

              O Psicólogo estuda os fenômenos psíquicos e de comportamento
              do ser humano a partir da análise de suas emoções, ideais e seus valores.
              Atua no diagnóstico, prevenção e tratamento de doenças mentais,
                       de personalidade ou distúrbios.</p> </div>
          <div>
            <img src={fisio} alt="" />
            <p className={Name}>
              Fisioterapia </p>
            <p className={Description}>

              É o conjunto de técnicas usadas no tratamento e na prevenção de doenças e lesões.
              O fisioterapeuta previne, diagnostica e trata disfunções
              do organismo humano causadas por acidentes,
                       má-formação genética ou vício de postura.</p> </div>
          <div>
            <img src={nurse} alt="" />
            <p className={Name}>
              Enfermagem </p>
            <p className={Description}>

              O enfermeiro atua na proteção, na promoção e na recuperação da saúde e na prevenção de doenças e complicações de saúde.</p> </div>
        </div>

      </div>






    </>


>>>>>>> origin/development_service_area
  );
}

export default ServiceArea;
